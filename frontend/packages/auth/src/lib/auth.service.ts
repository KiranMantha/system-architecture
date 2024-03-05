import { ConfigService } from '@frontend/common';
import { BehaviourSubjectObs, Injectable } from '@plumejs/core';
import Keycloak, { KeycloakOnLoad } from 'keycloak-js';

@Injectable({
  deps: [ConfigService]
})
export class AuthService {
  private _instance: Keycloak;
  private _authenticated: BehaviourSubjectObs<boolean> =
    new BehaviourSubjectObs(false);
  constructor(private configService: ConfigService) {}

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
}
