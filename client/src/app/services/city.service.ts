import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  getCities(): Promise<any> {
    return this.http.get(`/data/cities.json`).toPromise().then(response => response.json());
  }

}

