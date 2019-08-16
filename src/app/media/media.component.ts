import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  media =[{
    "id" : 1,
    "name" : "onze catering",
    "imageUrl": "assets/video/VID-20190807-WA0025.mp4",
    "description" : "onze catering"
  }]

  constructor() { }

  ngOnInit() {
  }
}
