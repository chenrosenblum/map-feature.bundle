import { Component } from '@angular/core';
import {MappingService} from "./mapping-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  constructor(){

    //private mappingService: MappingService
     // this.mappingService.getCoordinates().subscribe(this.gettingCoordinates);
  }

  /*gettingCoordinates(data: any){

    for (let i = 0; i < data.results.length; i++) {
      data[i] = data.results[i].formatted_address;
      //console.log(data.results[i].geometry.location);
      let location = data.results[i].geometry.location;
      let lat = location.lat;
      let lng = location.lng;

    }
  }*/

}


/*(data: any) =>

 //console.log(data),
 for (i = 0; i < data.results.length; i++) {
 data[i] = data.results[i].formatted_address;
 }
 console.log(data)
 */
