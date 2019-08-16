import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MenuItem } from './model/menuItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  menuData: any[];
  private _jsonUrl: string = "./assets/data/menu.json";


  constructor(private http: HttpClient) {
   
   }
  

  public getMenuData(): Observable<MenuItem[]>{

    return this.http.get<MenuItem[]>(this._jsonUrl);

   }

  

}