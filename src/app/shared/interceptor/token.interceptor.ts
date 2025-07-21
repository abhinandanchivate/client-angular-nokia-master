import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  // set the bypass for login and register
  if (req.url.includes('login') || req.url.includes('register')) {
    console.log('inside login / register condition');
    return next(req);
  }

  if (token) {
    const tokenReq = req.clone({ setHeaders: { 'x-auth-token': `${token}` } });

    return next(tokenReq);
  } else {
    router.navigate(['/unauthorize']);
  }
  return next(req);
};
