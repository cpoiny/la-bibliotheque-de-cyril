import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // Arrow function, so there is no constructor we need to use inject function instead of constructor
  const router = inject(Router);
  const localData = localStorage.getItem('token');
  const sessionData = sessionStorage.getItem('token');
  if(localData != null && sessionData !== null) {
    return true;
  }else {
    router.navigateByUrl('/admin-lbdc/login')
    return false;
  }
};
