import { ConfigService } from '@frontend/common';
import { BehaviourSubjectObs, Injectable, SubjectObs } from '@plumejs/core';
import Keycloak, { KeycloakOnLoad } from 'keycloak-js';
import { KeycloakEvent, KeycloakEventType } from './auth.interface';

@Injectable({
  deps: [ConfigService]
})
export class AuthService {
  private _instance: Keycloak;
  private _authenticated: BehaviourSubjectObs<boolean> =
    new BehaviourSubjectObs(false);

  private _keycloakEvents$: SubjectObs<KeycloakEvent> =
    new SubjectObs<KeycloakEvent>();

  constructor(private configService: ConfigService) {}

  get keycloakEvents() {
    return this._keycloakEvents$.asObservable();
  }

  async init() {
    const {
      PLUME_KEYCLOAK_SERVER_URL,
      PLUME_KEYCLOAK_REALM_NAME,
      PLUME_KEYCLOAK_CLIENT_ID,
      PLUME_KEYCLOAK_LOAD_OPTION
    } = this.configService.getAll<string>();

    this._instance = new Keycloak({
      url: PLUME_KEYCLOAK_SERVER_URL,
      realm: PLUME_KEYCLOAK_REALM_NAME,
      clientId: PLUME_KEYCLOAK_CLIENT_ID
    });

    this.bindsKeycloakEvents();

    try {
      const authenticated = await this._instance.init({
        onLoad: PLUME_KEYCLOAK_LOAD_OPTION as KeycloakOnLoad,
        checkLoginIframe: true,
        checkLoginIframeInterval: 1
      });
      console.log(
        `User is ${authenticated ? 'authenticated' : 'not authenticated'}`
      );
      this._authenticated.next(authenticated);
      this.keycloakEvents.subscribe((event) => {
        if (event?.type === KeycloakEventType.OnTokenExpired) {
          this._instance.updateToken(5);
        } else if (event?.type === KeycloakEventType.OnAuthLogout) {
          this.logout();
        }
      });
    } catch (error) {
      console.error('Failed to initialize adapter:', error);
    }
  }

  async login(options: Keycloak.KeycloakLoginOptions = {}) {
    await this._instance.login(options);
  }

  async logout(redirectUri?: string) {
    const options = {
      redirectUri
    };

    await this._instance.logout(options);
    this._authenticated.next(this._instance.authenticated || false);
  }

  async getToken(): Promise<string> {
    return this._instance.token || '';
  }

  isLoggedIn() {
    return this._authenticated.asObservable();
  }

  getKeycloakInstance(): Keycloak {
    return this._instance;
  }

  private bindsKeycloakEvents(): void {
    this._instance.onAuthError = (errorData) => {
      this._keycloakEvents$.next({
        args: errorData,
        type: KeycloakEventType.OnAuthError
      });
    };

    this._instance.onAuthLogout = () => {
      this._keycloakEvents$.next({ type: KeycloakEventType.OnAuthLogout });
    };

    this._instance.onAuthRefreshSuccess = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthRefreshSuccess
      });
    };

    this._instance.onAuthRefreshError = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthRefreshError
      });
    };

    this._instance.onAuthSuccess = () => {
      this._keycloakEvents$.next({ type: KeycloakEventType.OnAuthSuccess });
    };

    this._instance.onTokenExpired = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnTokenExpired
      });
    };

    this._instance.onActionUpdate = (state) => {
      this._keycloakEvents$.next({
        args: state,
        type: KeycloakEventType.OnActionUpdate
      });
    };

    this._instance.onReady = (authenticated) => {
      this._keycloakEvents$.next({
        args: authenticated,
        type: KeycloakEventType.OnReady
      });
    };
  }
}
