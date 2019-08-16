import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestellen-berzorgen',
  templateUrl: './bestellen-berzorgen.component.html',
  styleUrls: ['./bestellen-berzorgen.component.css']
})
export class BestellenBerzorgenComponent implements OnInit {
  bezorgPlaats =[
    {
      "place":"Naarden",
      "description": "U kunt ook onze Ethiopisch en Eritrees maaltijden laten bezorgen.",
      "bezorgKosten": "2,00",
      "minimum":"15,00"
    },
    {
      "place":"Bussum",
      "description": "U kunt ook onze Ethiopisch en Eritrees maaltijden laten bezorgen.",
      "bezorgKosten": "2,00",
      "minimum":"15,00"
    },
    {
      "place":"Hilversum",
      "description": "U kunt ook onze Ethiopisch en Eritrees maaltijden laten bezorgen.",
      "bezorgKosten": "2,00",
      "minimum":"15,00"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
