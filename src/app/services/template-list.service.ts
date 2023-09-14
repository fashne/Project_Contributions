import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../models/table_model';

@Injectable({
  providedIn: 'root'
})
export class TemplateListService {

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any> {
    return this.http.get<any>('https://v4gjr.wiremockapi.cloud/table');
  }
}
