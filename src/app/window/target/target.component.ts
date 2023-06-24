import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {
  @Input()
  error: boolean = false;
  
  @Input()
  success: boolean = false;
}
