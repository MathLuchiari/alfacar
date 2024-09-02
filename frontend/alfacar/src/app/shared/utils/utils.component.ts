import { Observable } from './../../../../node_modules/rxjs/src/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from '../models/endereco.interface';

@Component({
  selector: 'app-utils',
  standalone: true,
  imports: [],
  templateUrl: './utils.component.html',
  styleUrl: './utils.component.scss'
})
export class UtilsComponent {
  constructor(
    private httpClient: HttpClient
  ) {}

  getCepData(cep: string): Observable<Endereco> {
    const cepApiLink = 'https://viacep.com.br/ws/'+ cep + '/json';

    return this.httpClient.get<Endereco>(cepApiLink);
  }
}
