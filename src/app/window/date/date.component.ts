import { Component } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  
  constructor( public windowService: WindowService ) {}
  
}
