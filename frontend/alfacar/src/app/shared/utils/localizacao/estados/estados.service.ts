import { Injectable, OnInit } from '@angular/core';
import { Estado } from '../../../models/localizacao/estado.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadosService implements OnInit {

  urlDbEstados: string = '../../../../../assets/db-estados.json';
  estadosList!: Array<Estado>;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates() {
    let request = new XMLHttpRequest();
    request.open('GET', this.urlDbEstados, false);
    request.send();

    this.estadosList = JSON.parse(request.response);
  }

  get(): Observable<Array<Estado>> {
    if( this.estadosList === undefined || this.estadosList.length === 0 ) {
      this.loadStates();
    }

    return of(this.estadosList);
  }
}
