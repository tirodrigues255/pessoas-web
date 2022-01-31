import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Pessoa } from "../model/pessoa";

@Injectable({
    providedIn: 'root',
})
export class PessoasService {

    private API_URL_BASE = environment.ApiServerHost + "/pessoas/"; 

    constructor(private http: HttpClient) {}
 
    getAll(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(this.API_URL_BASE);
    }

    getById(id: String) {
        return this.http.get<Pessoa[]>(this.API_URL_BASE + id);
    }

    create(pessoa: Pessoa) {

    }

    update(pessoa: Pessoa) {

    }

    deleteById(id: String) {

    }
}

function data(data: any, arg1: any, arg2: {}): Observable<Pessoa[]> {
    throw new Error("Function not implemented.");
}
