import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RouteAdviceService {

  constructor(private http: Http) { }

  getRouteAdvice(start: any, end: any): Promise<any> {
    return this.http.get(`/routeAdvices/` + start + `/` + end).toPromise().then(response => response.json());
  }


}
