import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markten',
  templateUrl: './markten.component.html',
  styleUrls: ['./markten.component.css']
})
export class MarktenComponent implements OnInit {
  markten =[
    {
      "plaats": "Utrecht",
      "description": "woensdag, vrijdag en zaterdag op vredenburg"
    },
    {
      "plaats": "Amsterdam",
      "description": "dinsdag op Dapperstraat"
    },
    {
      "plaats": "Bussum",
      "description": "donderdag op de markt"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
