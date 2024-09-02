import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../../../models/address.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(cep: string): Observable<Address>{
    return this.httpClient.get<Address>(`https://viacep.com.br/ws/${cep}/json`);
  }
}
