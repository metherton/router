import { CityService } from '../services/city.service';
import {RouteAdviceService} from '../services/route-advice.service';
import { Component, OnInit } from '@angular/core';

export class City {
  constructor(public name: string, public latitude: string, public longitude: string) {
  }

}

export class RouteRequest {
  constructor(public startCity: City, public endCity: City) {
  }
}

//public OptimalRouteAdvice(List<String> waypoints, int timeDuration, int fuelCost, int timeCost, int pathCost) {


  export class RouteAdvice {
    constructor(public waypoints: Waypoint[], public timeDuration: Number, public fuelCost: Number, public pathCost: Number) {
  }
}

export class Waypoint {
  constructor(public longitude: Number, public latitude: Number) {}
}

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {

  public routeAdvice: Promise<RouteAdvice>
  public waypointCount: number;
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
    this.waypointCount = 0;
  }

  convert(waypoint: string) {
    let tup = waypoint.split("_");
    return new Waypoint(Number(tup[0]), Number(tup[1]));
  }

  convertCityToWaypoint(city: City) {
    return city.longitude + "_" + city.latitude;
  }

  reducePoints(w, index) {
    return (index % 4) == 0;
    // return (w.latitude * 10 * 13) % 7 === 0
  }


  planRoute() {
    this.lat = this.model.startCity.latitude;
    this.lng = this.model.startCity.longitude;
    this.waypoints = this.routeAdviceService.getRouteAdvice(this.convertCityToWaypoint(this.model.startCity), this.convertCityToWaypoint(this.model.endCity)).then(routeAdvice => routeAdvice.waypoints.map(w => this.convert(w)).filter(this.reducePoints));
    //this.waypoints = Promise.resolve([{lat: '38.0', lng: '150.0'}, {lat: '47.0', lng: '-67.0'}]);

    console.log('Plan route with', this.convertCityToWaypoint(this.model.startCity), this.convertCityToWaypoint(this.model.endCity));
    this.model = new RouteRequest(new City('','',''), new City('','',''));
    this.resetFormHack = false;
    setTimeout(() => this.resetFormHack = true, 0);
  }

}

