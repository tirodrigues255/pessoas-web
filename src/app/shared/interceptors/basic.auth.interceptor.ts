import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BasicAuthInterceptor implements BasicAuthInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Autenticação fixa, porém, estaria pegando de um serviço de autenticação no app
        const currentUser = "admin";  
        const password    = "123456";
        const authData = window.btoa(currentUser + ":" + password);        

        //request.headers.append('Access-Control-Allow-Origin', '*');
        request.headers.append('Access-Control-Allow-Credentials', 'true');
        request = request.clone({
            setHeaders: { 
                Authorization: `Basic ${authData}`
            }
        });
        
        return next.handle(request);
    }
}