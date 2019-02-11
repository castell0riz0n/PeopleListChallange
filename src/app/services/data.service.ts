
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) {}

  getPeople(): Observable<any> {
    return this.http
      .get(this.apiUrl + 'people-list')
      .pipe(map(res => res.json()));
  }

  handleTrust(model: number) {
    console.log('model is : ' + model);
    return this.http.post(this.apiUrl + 'handle-trust/' + model, model);
  }
}
