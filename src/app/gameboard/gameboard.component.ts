import { Component, OnChanges, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  public board:string;
  
  constructor(public gameService: GameService) {

  }

  ngOnInit(): void {

    this.gameService.gameGenerator();
   
  }


  displayBoard():string {
   
      return this.gameService.number1 + ' + ' + this.gameService.number2;
    
  }



    
  

}
