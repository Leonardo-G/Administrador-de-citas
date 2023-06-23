import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { WindowComponent } from './window/window.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    WindowComponent
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
