import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  catering =[
    {
      "title": "Catering",
      "subtitle": "Ethiopisch en Eritrees eten ",
      "description": "Wij verzorgen graag de catering voor uw feest, evenement of party met of zonder de snackwagen op locatie.",
      "imageUrl" : "./assets/img/catering.jpg",
      "buttonText" : "Stuur een berichtje voor informatie"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
