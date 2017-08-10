import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';

@Injectable()
export class NoteTxtService {
  BASE_URL: string = 'http://localhost:3000';

  public note = {};

  constructor(
    private http: Http,
    private session: SessionService
  ) { }

  createNote(note) {
    return this.http.post(`${this.BASE_URL}/api/noteTxt`, note, this.requestOptions())
      .map((res) => res.json());
  }

  deleteNote(id) {
    return this.http.delete(`${this.BASE_URL}/api/noteTxt/${id}`, this.requestOptions())
      .map((res) => res.json());
  }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
