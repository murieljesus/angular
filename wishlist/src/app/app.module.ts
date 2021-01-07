import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTripComponent } from './form-trip/form-trip.component';
import { DestApiClient} from './models/dest-api-client.model';

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
    DetailComponent,
    FormTripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DestApiClient
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
