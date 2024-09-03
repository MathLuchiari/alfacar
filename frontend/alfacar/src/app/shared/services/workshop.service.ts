import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WorkshopPage } from '../models/workshop/workshop-page.interface';
import { Observable } from 'rxjs';
import { Workshop } from '../models/workshop/workshop.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(
    private httpClient: HttpClient
  ) {}

  get(): Observable<WorkshopPage> {
    return this.httpClient.get<WorkshopPage>(`${environment.API}/workshops`);
  }

  getById(id: string): Observable<Workshop> {
    return this.httpClient.get<Workshop>(`${environment.API}/workshops/${id}`);
  }

  create(workshop: Workshop): Observable<Workshop> {
    return this.httpClient.post<Workshop>(`${environment.API}/workshops`, workshop);
  }

  modify(workshop: Workshop): Observable<Workshop> {
    return this.httpClient.put<Workshop>(`${environment.API}/workshops`, workshop);
  }

  delete( id: string ): Observable<Workshop> {
    return this.httpClient.delete<Workshop>(`${environment.API}/workshops/${id}`);
  }
}
