import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {TokenService} from "../service/token.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenReq = req.clone({ setHeaders: {Authorization: inject(TokenService).token}})

  return next(tokenReq);
};
