import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../UserService/user.service';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  // Your code here



  // Arrow function, so there is no constructor we need to
  // use inject function instead of constructor
  const router = inject(Router);
  const userService = inject(UserService);
  const authService = inject(AuthenticationService);

  if (typeof localStorage !== 'undefined') {

    const token = localStorage.getItem('token');

    if (token !== null) {
      
      let isAdmin : boolean;
      isAdmin = userService.decodeToken(token);
      if (isAdmin) {    
        return true;
      } else {
        if (!authService.isLoggedIn()) {
        router.navigateByUrl('/admin-lbdc/login');
        return false;
        }
      }

    } else {
      if (!authService.isLoggedIn()) {
      router.navigateByUrl('/admin-lbdc/login');
      return false;
      }
    }
    
  } else {
    router.navigateByUrl('/admin-lbdc/login');
    console.error('localStorage is not available');
    return false;
  }
    return false;
};

