import { Component, OnChanges, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import {Answer} from '../enum/answer';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {


  constructor(public gameService: GameService) { }

  handle_odd() {

    if(this.gameService.getResult() % 2 !== 0) {
         
      this.gameService.result = Answer.CORRECT;
      this.gameService.correctCounter++

    } else {
      this.gameService.wrongCounter++
      this.gameService.result = Answer.WRONG;
      
    }

    this.gameService.wasClick = true;
    this.gameService.generateNext();

  }

  handle_even() {

    if(this.gameService.getResult() % 2 == 0) {

      this.gameService.correctCounter++
      this.gameService.result = Answer.CORRECT;

    } else {

      this.gameService.wrongCounter++
      this.gameService.result =  Answer.WRONG;
      
    }
  
    this.gameService.wasClick = true;
    this.gameService.generateNext();

  }

}
