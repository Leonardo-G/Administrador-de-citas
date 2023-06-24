import { Component, Input } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  
  constructor( public windowService: WindowService ) {}
  
}
