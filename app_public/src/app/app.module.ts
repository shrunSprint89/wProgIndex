import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

//import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { WebprogMapComponent } from './webprog-map/webprog-map.component';
import { MapGuideComponent } from './map-guide/map-guide.component';
//import { WebprogMapJsmindmapComponent } from './webprog-map-jsmindmap/webprog-map-jsmindmap.component';

@NgModule({
  declarations: [
  //  AppComponent,
    FrameworkComponent,
    ResourceListComponent,
    AboutPageComponent,
    UnderConstructionComponent,
    WebprogMapComponent,
    MapGuideComponent
    //WebprogMapJsmindmapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        //component: ResourceListComponent
        component: WebprogMapComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      }
      /*,
      {
        path: 'webprogMap',
        component: WebprogMapComponent
      }*/
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
