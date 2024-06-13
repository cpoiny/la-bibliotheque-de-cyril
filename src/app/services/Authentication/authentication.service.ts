import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenExpiration! : Date;
  private isAuthenticated = false;

  constructor(
    private router : Router,
    
  ) {
    this.checkToken();
   }

   checkToken() {
    if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      // Vérifiez si le token est valide. Si c'est le cas, définissez isAuthenticated sur true.
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
  }

  setTokenExpiration(expiration: Date): void {
    this.tokenExpiration = expiration;
  }

  checkIfTokenExpired(): void {
   const istokenExpired = this.tokenExpiration ? new Date() > this.tokenExpiration : true;
   if (istokenExpired) this.logout();
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated = true;
  }
  
  logout(): void {
    localStorage.clear();
    this.isAuthenticated = false;
    this.router.navigate(['admin-lbdc/login']);
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
