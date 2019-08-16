import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menuItem';
import { DataServiceService } from  '../data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 public menu : MenuItem [];

  constructor(private _dataService : DataServiceService) { 

    console.log(this.menu);
    
  }


  ngOnInit() {

   this._dataService.getMenuData().subscribe(data=> this.menu = data);
   console.log(this.menu);
  }

}
