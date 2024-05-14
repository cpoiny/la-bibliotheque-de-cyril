import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {

  // Arrow function, so there is no constructor we need to
  // use inject function instead of constructor
  const router = inject(Router);

  if (typeof localStorage !== 'undefined') {

    const token = localStorage.getItem('token');

    if (token !== null) {
      
      let decodedToken: { email: string, exp: number, iat: number, id: number, role: string };
      decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      
      if (role === "admin") {
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

