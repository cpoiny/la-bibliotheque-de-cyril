import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // Arrow function, so there is no constructor we need to
  // use inject function instead of constructor
  const router = inject(Router);

  if (typeof localStorage !== 'undefined') {

  const localData = localStorage.getItem('token');
  if(localData !== null) {
    console.error('je suis la');
    return true;
  }else {
    router.navigateByUrl('/admin-lbdc/login');
    return false;
  }
} else {
  router.navigateByUrl('/admin-lbdc/login');
  console.error('localStorage is not available');
  return false; 
}

};
