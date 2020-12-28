import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { destino } from '../models/trip.models';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  @Input()
  destination!: destino;
  
  constructor() {}

  ngOnInit(): void {
  }

}
