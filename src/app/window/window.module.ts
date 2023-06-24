import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { WindowComponent } from './window/window.component';
import { FormsModule } from '@angular/forms';
import { DateComponent } from './date/date.component';
import { TargetComponent } from './target/target.component';


@NgModule({
  declarations: [
    FormComponent,
    WindowComponent,
    DateComponent,
    TargetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WindowComponent
  ]
})
export class WindowModule { }
