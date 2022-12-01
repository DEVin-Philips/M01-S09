import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './slide08.component.html',
  styleUrls: ['./slide08.component.css'],
})
export class Slide08Component implements OnInit {
  @Input() type: string = '';
  @Input() color: string = '';
  @Input() text: string = '';
  //a declaração actionOutput pode ser modificada, ela só indica o nome da variável
  @Output() actionOutput: EventEmitter<any> = new EventEmitter();
  retorno = 'O título do botão é '+this.text+' onde seu tipo é '+this.type+' com a classe de cor de fundo '+ this.color;
  
  constructor() {}

  ngOnInit(): void {}
}
