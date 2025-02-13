import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  apiUrl: string = environment.apiUrl;
  baseUrl: string = `${this.apiUrl}/static`;
  
  constructor(private http: HttpClient) { }

  fetchProUsers() {
    return this.http.get<any>(`${this.baseUrl}/pro/list`);
  }

  fetchPremadeParties() {
    return this.http.get<any>(`${this.baseUrl}/premade`);
  }

}
