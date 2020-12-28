import { Component, OnInit } from '@angular/core';
import { destino } from '../models/trip.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
destination: destino[];
  constructor() { 
    this.destination=[];
  }


  ngOnInit(): void {
  }
  save(name:string,url:string):boolean{
    this.destination.push(new destino(name,url));
    console.log(this.destination);
    return false;
  }
}