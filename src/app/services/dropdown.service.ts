//dropdown.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private carsUrl = 'https://lr7rg.wiremockapi.cloud/category';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.carsUrl);
  }
}
