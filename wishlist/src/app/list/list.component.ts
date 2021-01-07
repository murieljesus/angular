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
//destination: destino[];
  constructor(public destApiClient: DestApiClient) { 
    this.onItemAdded = new EventEmitter();
    //this.destination=[];
  }


  ngOnInit(): void {
  }
  save(d: destino){
    this.destApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  chosen(e: destino){
    this.destApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);

  }
}
