import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json', 
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

    /* Uses http.get() to load data from a single API endpoint */
    getIndex() {
      return this.http.get('http://java-banking-api.cfapps.io/api/index');
      //return this.http.get('http://localhost:8080/api/index');
    }

    /* Uses http.get() to load data from a single API endpoint */
    getAuthors() {
      return this.http.get('http://java-banking-api.cfapps.io/api/Authors');
    }

    transferMoney(transfer){
      return this.http.post('https://java-banking-api.cfapps.io/api/transfers', transfer, httpOptions);
    }

}
