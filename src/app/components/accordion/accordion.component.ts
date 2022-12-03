import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  // Exercício do slide 06
  @Input() titleAccordion: string = "";
  @Input() descriptionAccordion: string = "";
  // Extra
  @Input() idAccordion: any = "accordion1";
  variavel2: any;

  constructor() {}

  ngOnInit(): void {
  }

  // Incluído no exercício do slide 13 (aula 03)
  mostraInfo(event:any){
    console.log(event)
  }
}
