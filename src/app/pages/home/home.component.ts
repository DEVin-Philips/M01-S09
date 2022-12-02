import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "Claudia";
  idade: number = 0;
  type: string = "text";
  
  constructor(public generalService: GeneralService) {
  }
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
