import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuth) => {
      if (!isAuth) router.navigate(['./auth/login']);
    })
  );
};

export const canMatchGuard: CanMatchFn = (route, segments) => {
  return checkAuthStatus();
};

export const canActivateGuard: CanActivateFn = (route, state) => {
  return checkAuthStatus();
};

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuth) => {
      if (isAuth) router.navigate(['/']);
    }),
    map((isAuth) => !isAuth)
  );
};
