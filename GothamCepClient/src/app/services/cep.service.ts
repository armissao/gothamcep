import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep.model';

const baseUrl = 'https://localhost:5001/api/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cep[]> {
    return this.http.get<Cep[]>(`${baseUrl}/getceps`);
  }

  get(id: any): Observable<Cep> {
    return this.http.get(`${baseUrl}/getcep?id=${id}`);
  }

  create(cep: Cep): Observable<any> {
    return this.http.post(baseUrl, cep);
  }

  update(id: any, cep: Cep): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, cep);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByNumero(numero: any): Observable<Cep> {
    return this.http.get<Cep>(`${baseUrl}/getcepnumero?numero=${numero}`);
  }

  // Validar CEP
  isGothamCEP(numeroCEP: any) : boolean {
        const padraoCEP = /^[0-9]{3}.[0-9]{2}$/
        return padraoCEP.test(numeroCEP)
  }


  }
