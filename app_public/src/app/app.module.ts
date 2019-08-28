import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

//import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
  //  AppComponent,
    FrameworkComponent,
    ResourceListComponent,
    AboutPageComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        //component: ResourceListComponent
        component: UnderConstructionComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
