import { Component } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {

  constructor( public windowService: WindowService ) {}

}
