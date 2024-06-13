import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../UserService/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  // Arrow function, so there is no constructor we need to
  // use inject function instead of constructor
  const router = inject(Router);
  const userService = inject(UserService);

  if (typeof localStorage !== 'undefined') {

    const token = localStorage.getItem('token');

    if (token !== null) {
      
      let isAdmin : boolean;
      isAdmin = userService.decodeToken(token);
      if (isAdmin) {    
        return true;
      } else {
        router.navigateByUrl('/admin-lbdc/login');
        return false;
      }

    } else {
      router.navigateByUrl('/admin-lbdc/login');
      return false;
    }
    
  } else {
    router.navigateByUrl('/admin-lbdc/login');
    console.error('localStorage is not available');
    return false;
  }
};

