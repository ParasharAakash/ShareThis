import { LoginService } from './login.service';
import { Injectable,Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injector: Injector) {}

  intercept(req, next){
    let loginService = this.injector.get(LoginService)
    let tokenizedReq= req.clone({
      setHeaders : {
        Authorization : `Bearer ${loginService.getToken()}` 
      }
    })
    return next.handle(tokenizedReq);
  }
}