import { Component, EventEmitter, Output } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  @Output()
  public onNewPatient: EventEmitter<IPatient> = new EventEmitter();

  patient: IPatient = {
    petName: "",
    owner: "",
    phone: "",
    date: "",
    time: "",
    symptoms: ""
  };
  
  emitPatient(): void{
    if ( Object.values(this.patient).some( p => p === "") ) return;
    this.onNewPatient.emit( this.patient );
  }
}
