import { Component, Input, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  title = 'week-09';
  description =
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quos dolor amet ad, cum voluptatem ducimus quae quam delectus 
    alias quidem recusandae omnis voluptates asperiores ratione 
    repellat voluptas ea modi debitis!`;

  //Injeção de dependencia feita sempre no constructor do componente
  constructor(public generalService: GeneralService, private calcService: CalculadoraService) {}

  ngOnInit(): void {
    //Apenas com a injeção de dependencia será possível utilizar o métodos somar
    console.log(this.calcService.somar(2,4));
  }

  // Incluído no exercício do slide 13 (aula 03)
  mostraInfo(event:any){
    console.log(event)
  }
}
