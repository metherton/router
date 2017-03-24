import { CityService } from '../services/city.service';
import {RouteAdviceService} from '../services/route-advice.service';
import { Component, OnInit } from '@angular/core';

export class City {
  constructor(public name: string, public latitude: string, public longitude: string) {
  }
  getWaypoint() {
    return this.longitude + "_" + this.latitude;
  }
}

export class RouteRequest {
  constructor(public startCity: City, public endCity: City) {
  }
}

export class Waypoint {
  constructor(public longitude: string, public latitude: string) {}
}

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {

  public cities: Promise<any[]>;
  public waypoints: Promise<any[]>;
  public title: string;
  // public startCity: City;
  // public endCity: City;
  public model = new RouteRequest(new City('','',''), new City('','',''));

  public resetFormHack: boolean;
  public showWaypoints: boolean;
  public lat: string;// = 51.678418;
  public lng: string; //= 7.809007;

  constructor(private cityService: CityService, private routeAdviceService: RouteAdviceService) { }

  ngOnInit() {
    this.resetFormHack = true;
    this.showWaypoints = false;
    this.title = "Routing Application";
  //  this.cities = this.cityService.getCities().then(cities => this.cities = cities);
    this.cities = this.cityService.getCities();
  }

  convert(waypoint: string) {
    let tup = waypoint.split("_");
    return new Waypoint(tup[0], tup[1]);
  }

  planRoute() {
    this.waypoints = this.routeAdviceService.getRouteAdvice(this.model.startCity.getWaypoint(), this.model.endCity.getWaypoint()).then(routeAdvice => routeAdvice.waypoints.map(w => this.convert(w)));
    this.showWaypoints = true;
    console.log('Plan route with', this.model.startCity.getWaypoint(), this.model.endCity.getWaypoint());
    this.model = new RouteRequest(new City('','',''), new City('','',''));
    this.resetFormHack = false;
    setTimeout(() => this.resetFormHack = true, 0);
  }

}

