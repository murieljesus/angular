import { destino } from './trip.models';

export class DestApiClient {
	destination:destino[];
	constructor() {
       this.destination = [];
	}
	add(d:destino){
	  this.destination.push(d);
	}
	getAll(){
	  return this.destination;
    }
}