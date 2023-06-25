import { Component, Input } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {

  constructor(public windowService: WindowService) {}
}
