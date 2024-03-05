/**
 * Keycloak event types, as described at the keycloak-js documentation:
 * https://www.keycloak.org/docs/latest/securing_apps/index.html#callback-events
 */
export enum KeycloakEventType {
  /**
   * Called if there was an error during authentication.
   */
  OnAuthError = 'OnAuthError',
  /**
   * Called if the user is logged out
   * (will only be called if the session status iframe is enabled, or in Cordova mode).
   */
  OnAuthLogout = 'OnAuthLogout',
  /**
   * Called if there was an error while trying to refresh the token.
   */
  OnAuthRefreshError = 'OnAuthRefreshError',
  /**
   * Called when the token is refreshed.
   */
  OnAuthRefreshSuccess = 'OnAuthRefreshSuccess',
  /**
   * Called when a user is successfully authenticated.
   */
  OnAuthSuccess = 'OnAuthSuccess',
  /**
   * Called when the adapter is initialized.
   */
  OnReady = 'OnReady',
  /**
   * Called when the access token is expired. If a refresh token is available the token
   * can be refreshed with updateToken, or in cases where it is not (that is, with implicit flow)
   * you can redirect to login screen to obtain a new access token.
   */
  OnTokenExpired = 'OnTokenExpired',
  /**
   * Called when a AIA has been requested by the application.
   */
  OnActionUpdate = 'OnActionUpdate'
}

/**
 * Structure of an event triggered by Keycloak, contains it's type
 * and arguments (if any).
 */
export interface KeycloakEvent {
  /**
   * Event type as described at {@link KeycloakEventType}.
   */
  type: KeycloakEventType;
  /**
   * Arguments from the keycloak-js event function.
   */
  args?: unknown;
}
