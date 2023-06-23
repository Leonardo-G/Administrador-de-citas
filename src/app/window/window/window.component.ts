import { Component } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {
  getPatient(patient: IPatient): void {
    console.log("DESDDE WINDOW");
    console.log(patient)
  }
}
