import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WindowModule } from './window/window.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
