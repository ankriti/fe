interface AuthConfig {
    clientID: string;
    domain: string;
    redirectUri: string;
    scope: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'L8G-DywY2GlR7mCOqbDsBTsS9nxf9K56',
    domain: 'ankriti.auth0.com',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  };