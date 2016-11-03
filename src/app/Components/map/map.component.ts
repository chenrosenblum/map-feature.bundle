import { Component, OnInit } from '@angular/core';

import { MarkerSettings } from "../../Classes/marker-settings";
import { MapSettings } from "../../Classes/map-settings";
import { MappingService } from "../../mapping-service.service";
//import {LazyMapsAPILoader} from "angular2-google-maps/core";

@Component({
  selector: 'mf-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  markers: MarkerSettings[] = [];
  icons: String[] = [
        "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Chartreuse-icon.png",
        "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png",
        "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Azure-icon.png"
  ];

  mapS = new MapSettings(31, 36, 6, true, false, false);

  chosenAddress: String = null;
  verifiedAddress: String = null;
  iconUrl: String = null;
  addressShown: boolean = false;
  //languageShown: boolean = false;
  label: String = null;
  title: String = null;

  constructor(private mappingService: MappingService) {}

  ngOnInit() {
    this.setCurrentLocation();
    this.markers = this.mappingService.getMarkers();
  }

  setCurrentLocation(){

    let myIconUrl = 'https://www.mapsmarker.com/wp-content/plugins/leaflet-maps-marker-pro/leaflet-dist/images/gpx-icon-start.png';

    navigator.geolocation.getCurrentPosition(
      (p)=> {
        this.mappingService.addMarker(new MarkerSettings(p.coords.latitude, p.coords.longitude, 'Your Location', 'I', myIconUrl));
        this.markers = this.mappingService.getMarkers();
      }
      ,(e) => console.log('error: ' + e));
  }

  onChooseAddress(){
    this.mappingService.addMarkerByAddress(this.chosenAddress, this.label, this.title, this.iconUrl);
    this.markers = this.mappingService.getMarkers();
  }

  onFindAddress(){
    this.mappingService.findAddress(this.chosenAddress).
      subscribe((verified) =>
                  this.verifiedAddress = verified);
  }

}
