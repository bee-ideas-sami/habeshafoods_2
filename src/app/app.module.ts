import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { CateringComponent } from './catering/catering.component';
import { MarktenComponent } from './markten/markten.component';
import { BestellenBerzorgenComponent } from './bestellen-berzorgen/bestellen-berzorgen.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { MediaComponent } from './media/media.component';
import { DataServiceService } from './data-service.service';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    CateringComponent,
    MarktenComponent,
    BestellenBerzorgenComponent,
    OverOnsComponent,
    MediaComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
