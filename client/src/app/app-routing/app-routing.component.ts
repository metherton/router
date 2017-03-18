import { CityService } from '../services/city.service';
import { Component, OnInit } from '@angular/core';

export class City {
  constructor(public name: string, public latitude: string, public longitude: string) {
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
  public startCity: City;
  public endCity: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.title = "Routing Application";
  //  this.cities = this.cityService.getCities().then(cities => this.cities = cities);
    this.cities = this.cityService.getCities();
  }

}

//
//   this.players = this.leaderboardService.getPlayers()
//     .then(leaderboard => leaderboard.map(r => this.playerService.getPlayer(r)))
//     .then(players => Promise.all(players));
// }
