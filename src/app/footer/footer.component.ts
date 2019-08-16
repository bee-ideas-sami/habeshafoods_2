import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  marktPlaatsen =["Amsterdam", "Bussum", "Utrecht"]
  bezorgPlaatsen =["Bussum", "Hilversum", "Naarden"]
  social = [{
    "socialSite": "facebook",
    "socialUrl":"https://www.facebook.com/habesha.foods"
  },
  {
    "socialSite": "Youtube",
    "socialUrl":"https://www.youtube.com/watch?v=Krh8Y-M9j_s"
  }]
  contact =["06 8555 7626"]
  copyRight =['habeshafoods.nl']

  constructor() { }

  ngOnInit() {
  }

}
