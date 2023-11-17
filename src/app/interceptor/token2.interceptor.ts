import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenService} from "../service/token.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class Token2Interceptor implements HttpInterceptor{
  constructor(private tokenService: TokenService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenReq = req.clone({ setHeaders: {Authorization: this.tokenService.token}})

    return next.handle(tokenReq);
  }
}
