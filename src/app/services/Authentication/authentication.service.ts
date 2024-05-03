import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenExpiration! : Date;

  constructor(
    private router : Router
  ) { }

  setTokenExpiration(expiration: Date): void {
    this.tokenExpiration = expiration;
  }

  checkIfTokenExpired(): void {
   const istokenExpired = this.tokenExpiration ? new Date() > this.tokenExpiration : true;
   if (istokenExpired) this.logout();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['admin-lbdc/login']);
  }
}
