import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

    /* Uses http.get() to load data from a single API endpoint */
    getIndex() {
      return this.http.get('http://java-banking-api.cfapps.io/api/index');
    }

    /* Uses http.get() to load data from a single API endpoint */
    getAuthors() {
      return this.http.get('http://java-banking-api.cfapps.io/api/Authors');
    }

}
