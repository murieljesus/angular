import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { destino } from '../models/trip.models';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  @Input()
  destination!: destino;
  @Output()
  clicked!: EventEmitter<destino>;
  
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }
  see(){
    this.clicked.emit(this.destination);
    return false;
  }

}
