import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  // Exercício do slide 06
  @Input() titleAccordion: string = "";
  @Input() descriptionAccordion: string = "";
  // Extra
  @Input() idAccordion: any = "accordion1";

  constructor() { }

  ngOnInit(): void {
  }

  // Incluído no exercício do slide 13 (aula 03)
  mostraInfo(event:any){
    console.log(event)
  }

}
