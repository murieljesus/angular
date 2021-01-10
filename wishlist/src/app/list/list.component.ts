import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { destino } from './../models/trip.models';
import {DestApiClient} from './../models/dest-api-client.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<destino>;
   updates: string[];
//destination: destino[];
  constructor(public destApiClient: DestApiClient) { 
    this.onItemAdded = new EventEmitter();
    this.updates =[];
    this.destApiClient.suscribeOnChange((d: destino)=>{
      if(d != null){
        this.updates.push('se suscribio a '+ d.n);

      }
    });
    //this.destination=[];
  }


  ngOnInit(): void {
  }
  save(d: destino){
    this.destApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  chosen(e: destino){
    this.destApiClient.pick(e);

  }
}
