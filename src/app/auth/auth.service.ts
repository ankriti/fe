import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'L8G-DywY2GlR7mCOqbDsBTsS9nxf9K56',
    domain: 'ankriti.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ankriti.auth0.com/userinfo',
    redirectUri: 'http://ankriti.com/',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}