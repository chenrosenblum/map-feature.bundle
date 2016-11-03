export class MapSettings {

  constructor(public lat: any,
              public lng: any,
              public zoom: number,
              public isDrag: boolean = true,
              public isZoom: boolean = false,
              public isScale: boolean = false){

  }
}

