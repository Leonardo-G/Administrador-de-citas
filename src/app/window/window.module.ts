import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { WindowComponent } from './window/window.component';


@NgModule({
  declarations: [
    FormComponent,
    WindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WindowComponent
  ]
})
export class WindowModule { }
