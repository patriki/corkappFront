import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CorkService {
  BASE_URL: string = 'http://localhost:3000';

  public cork = {};
  
  constructor(private http: Http) { }

  createCork() {
    return this.http.post(`${this.BASE_URL}/api/cork`, this.cork)
      .map((res) => res.json());
  }

  //este no se si hace falta:
  // getCorks() {
  //   return this.http.get(`${this.BASE_URL}/api/cork`)
  //     .map((res) => res.json());
  // }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/cork/${id}`)
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
}
