
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public number1:number;
  public number2:number;
  public wasClick:boolean = false;
  public result:string;
  public history:Array<string> = [];
  public wrongCounter:number;
  public correctCounter:number;

  constructor() { 
    this.wrongCounter = 0;
    this.correctCounter = 0;
  }



  gameGenerator() {

    this.number1 =  Math.floor(Math.random() * 50) + 1;
    this.number2 =  Math.floor(Math.random() * 50) + 1;
  
  }

  getResult():number {
    return this.number1 + this.number2;
  }


  generateNext() {

    setTimeout(()=> {

      this.gameGenerator();
      this.wasClick = false;
     
      
    },3000)

}


}
