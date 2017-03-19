import { CityService } from '../services/city.service';
import { Component, OnInit } from '@angular/core';

export class City {
  constructor(public name: string, public latitude: string, public longitude: string) {
  }
}

export class RouteRequest {
  constructor(public startCity: City, public endCity: City) {
  }
}

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {

  public cities: Promise<any[]>;
  public title: string;
  // public startCity: City;
  // public endCity: City;
  public model = new RouteRequest(new City('','',''), new City('','',''));
  
  public resetFormHack: boolean;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.resetFormHack = true;
    this.title = "Routing Application";
  //  this.cities = this.cityService.getCities().then(cities => this.cities = cities);
    this.cities = this.cityService.getCities();
  }

  planRoute() {
    console.log('Plan route with', this.model.startCity, this.model.endCity);
    this.model = new RouteRequest(new City('','',''), new City('','',''));
    this.resetFormHack = false;
    setTimeout(() => this.resetFormHack = true, 0);
  }

}

//
//   this.players = this.leaderboardService.getPlayers()
//     .then(leaderboard => leaderboard.map(r => this.playerService.getPlayer(r)))
//     .then(players => Promise.all(players));
// }
