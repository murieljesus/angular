
import { destino } from './trip.models';
import { BehaviorSubject, Subject } from 'rxjs';

export class DestApiClient {

	destination: destino[];
	current: Subject<destino> = new BehaviorSubject<destino>(null);
	constructor() {
		this.destination = [];
	}
	add(d: destino) {
		this.destination.push(d);
	}
	getAll() {
		return this.destination;
	}
	//new fuction
	pick(d: destino) {
		this.destination.forEach(x => x.setSelected(false));
		d.setSelected(true);
		this.current.next(d);
	}
	suscribeOnChange(fn: (d: destino) => void){
		this.current.subscribe(fn);
	}
}