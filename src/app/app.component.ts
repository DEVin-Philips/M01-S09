import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Para exercício slide 06
  title = 'week-09';
  description =
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quos dolor amet ad, cum voluptatem ducimus quae quam delectus 
    alias quidem recusandae omnis voluptates asperiores ratione 
    repellat voluptas ea modi debitis!`;

  constructor() {}

  // Para exercício slide 08
  enviar(retorno: any){
    console.log("Dados enviados");
    console.log(retorno);
  }
  cancelar(){
    console.log("Dados cancelados");
  }
}
