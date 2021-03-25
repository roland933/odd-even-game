import { Component, OnChanges } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'oddeven';
  wrong:number;
  correct:number;

  constructor(public gameService: GameService) {


  }




}
