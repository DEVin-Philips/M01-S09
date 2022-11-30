import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "Claudia";
  idade: number = 0;
  type: string = "text";
  
  constructor() { }
  ngOnInit(): void {}
  
  adicionaMais(){
    console.log("Cliquei")
  }
  
  contador: number = 0;
  subtrair(){
    this.contador--;
  }
  somar(){
    this.contador++;
  }
}
