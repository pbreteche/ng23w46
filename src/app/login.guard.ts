import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./login.service";

export const loginGuard: CanActivateFn = (route, state) => {
  if (inject(LoginService).username) {
    return true;
  } else {
    return inject(Router).parseUrl('');
  }
};
