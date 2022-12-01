import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  // Exercício do slide 06
  @Input() titleAccordion: string = "";
  @Input() descriptionAccordion: string = "";
  // Extra
  @Input() idAccordion: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
