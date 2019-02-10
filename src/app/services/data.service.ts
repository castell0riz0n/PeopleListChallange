import { Elements } from './../models/elements';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = environment.apiUrl;

constructor(
  private http: Http
) { }

getPeople(): Observable<any> {
    console.log(this.apiUrl + 'people-list');
    var data = this.http.get(this.apiUrl + 'people-list').pipe(map(res => res.json()));
    console.log(data);
    return data;
}

}
