import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { MarktenComponent } from './markten/markten.component';
import { BestellenBerzorgenComponent } from './bestellen-berzorgen/bestellen-berzorgen.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'markten', component: MarktenComponent},
  { path: 'bestellenBezorgen', component: BestellenBerzorgenComponent},
  { path: 'overOns', component: OverOnsComponent},
  { path: 'media', component: MediaComponent},
  { path: 'contact', component: ContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
