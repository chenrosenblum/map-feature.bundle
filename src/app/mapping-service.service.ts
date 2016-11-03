import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {MarkerSettings} from "./Classes/marker-settings";


@Injectable()
export class MappingService {

  markers: MarkerSettings[] = [];

  constructor(private http: Http) { }

  getCoordinates(address: String){
    let googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyAlTDFwmt7XWND-A2WLe-V0Q9p1RhhOFJc';

    return this.http.get(googleUrl)
      .map((data: Response) => data.json());
  }

  getMarkers(){
    return this.markers;
  }

  findAddress(address): Observable<String> {

    let ob = new Observable<String>(observer => {
      this.getCoordinates(address).subscribe(
        (data: any) => {
          if (data.status == "OK") {
            observer.next(data.results[0].formatted_address)
          }
          else{
            observer.next('כתובת לא נמצאה. אמת כתובת ונסה שנית');
          }
        });
    });

    return ob;
  }

  addMarkerByAddress(address, title = null, label = null, iconUrl = null) {
    this.getCoordinates(address).subscribe(
      (data: any) => {
        if(data.status == "OK") {
          for (let i = 0; i < data.results.length; i++) {
            let location = data.results[i].geometry.location;
            this.addMarker(new MarkerSettings(location.lat, location.lng, title, label, iconUrl));
          }
        }
        else{
          alert('ארעה שגיאה. אמת את הכתובת ונסה שנית');
        }
      }
    );
  }

  addMarker(m: MarkerSettings){
    this.markers.push(m);
  }

}
