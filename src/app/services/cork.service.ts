import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';

@Injectable()
export class CorkService {
  BASE_URL: string = 'http://localhost:3000';

  public cork = {};

  constructor(
    private http: Http,
    private session: SessionService
  ) { }

  createCork(cork) {
    return this.http.post(`${this.BASE_URL}/api/cork`, cork, this.requestOptions())
      .map((res) => res.json());
  }

  // este no se si hace falta:
  getCorks() {
    return this.http.get(`${this.BASE_URL}/api/cork`, this.requestOptions())
      .map((res) => res.json());
  }

  getCork(id) {
    return this.http.get(`${this.BASE_URL}/api/cork/${id}`, this.requestOptions())
      .map((res) => res.json());
  }
  //ESTO NO ESTÁ HECHO:
  // edit(id) {
  //   return this.http.put(`${this.BASE_URL}/api/cork/${id}`)
  //     .map((res) => res.json());
  // }

  //ESTO NO ESTÁ HECHO:
  // remove(id) {
  //   return this.http.delete(`${this.BASE_URL}/api/phones/${id}`)
  //     .map((res) => res.json());
  // }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
