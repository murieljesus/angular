import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {destino} from '../models/trip.models';

@Component({
  selector: 'app-form-trip',
  templateUrl: './form-trip.component.html',
  styleUrls: ['./form-trip.component.css']
})
export class FormTripComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<destino>;
  fg: FormGroup;
  minLon = 3;
  constructor(private fb: FormBuilder) {
    //init
    this.onItemAdded = new EventEmitter();
    //vinculacion con tag html
    this.fg = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        this.nameParam(this.minLon),
        this.nameValidator
      ])],
      url: ['']
    });

        //observador de tipeo
        this.fg.valueChanges.subscribe((form: any) =>{
          console.log('cambio el formulario: ', form);
        })
   }

  ngOnInit(): void {
  }
  saves(name: string, url: string): boolean {
    const d = new destino(name, url);
    this.onItemAdded.emit(d);
    return false;
  }
  nameValidator(control: FormControl): { [s: string]: boolean } {
  const l = control.value.toString().trim().length;
  if(l>0 && l<5)
  {
    return {invalidName: true};
  }
  return {invalidName:false};
}
nameParam(minLong: number){
  return (control: FormControl): { [s: string]: boolean } | null =>{
    const l = control.value.toString().trim().length;
  if(l>0 && l< minLong)
  {
    return {longName: true};
  }
  return null;
  }
 
}
}
