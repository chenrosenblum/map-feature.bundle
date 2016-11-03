import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MappingService } from './mapping-service.service';
import { MapComponent } from './Components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlTDFwmt7XWND-A2WLe-V0Q9p1RhhOFJc'
    })
  ],
  providers: [MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
