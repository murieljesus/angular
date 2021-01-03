import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes =[
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path:'home', component: ListComponent},
  {path:'destino', component: DetailComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
