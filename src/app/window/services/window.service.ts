import { Injectable, EventEmitter } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    constructor() { }

  public onNewPatient: EventEmitter<IPatient> = new EventEmitter();

  patient: IPatient = {
    petName: "",
    owner: "",
    phone: "",
    date: "",
    time: "",
    symptoms: ""
  };

  patients: IPatient[] = []
  
  newPatient(): void{
    if ( Object.values(this.patient).some( p => p === "") ) return;
    this.patients.push(this.patient);
  }
}