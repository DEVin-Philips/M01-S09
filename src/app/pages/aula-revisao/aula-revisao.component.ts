import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-aula-revisao',
  templateUrl: './aula-revisao.component.html',
  styleUrls: ['./aula-revisao.component.css']
})
export class AulaRevisaoComponent implements OnInit {
  // Primeiro exemplo foi capturando o resultado separadamente pela operação
  resultSoma: number = 0;
  resultSubtracao: number = 0;
  resultDivisao: number = 0;
  resultMultiplicacao: number = 0;

  // Segundo exemplo foi somente startando o método dependendo do botão selecionado
  resultado: number = 0;
  number1: number = 0;
  number2: number = 0;

  constructor(public calcService: CalculadoraService) {}

  ngOnInit(): void {
  }

  // Outro modo para executar um método que tiver uma chamado muito grande para o service
  somar(){
    this.resultSoma = this.calcService.somar(this.number1, this.number2);
  }

}
