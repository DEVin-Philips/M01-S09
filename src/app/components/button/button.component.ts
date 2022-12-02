import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = '';
  @Input() color: string = '';
  @Input() text: string = '';
  //a declaração actionOutput pode ser modificada, ela só indica o nome da variável
  @Output() actionOutput: EventEmitter<any> = new EventEmitter();
  retorno = 'O título do botão é '+this.text+' onde seu tipo é '+this.type+' com a classe de cor de fundo '+ this.color;
  
  constructor() {}

  ngOnInit(): void {}
}
