import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    GamecontrolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
