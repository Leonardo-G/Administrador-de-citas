import { Component } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  constructor( public windowService: WindowService ) {}
}
