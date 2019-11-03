import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ChungloaiComponent } from './chungloai/chungloai.component';
import { GiohangComponent } from './giohang/giohang.component';
import { PhanhuuluanComponent } from './phanhuuluan/phanhuuluan.component';
import { BanhangComponent } from './banhang/banhang.component';
import { HinhchunhatComponent } from './hinhchunhat/hinhchunhat.component';
import { KiemtraComponent } from './kiemtra/kiemtra.component';
import { TinhtienthuongComponent } from './tinhtienthuong/tinhtienthuong.component';
import { XeploaiComponent } from './xeploai/xeploai.component';
import { FilmsComponent } from './films/films.component';
import { AboutComponent } from './about/about.component';
import { ThemsinhvienComponent } from './themsinhvien/themsinhvien.component';
import { GuitarshopComponent } from './guitarshop/guitarshop.component';
import { ChitietguitarComponent } from './chitietguitar/chitietguitar.component';
import { GiohangguitarComponent } from './giohangguitar/giohangguitar.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ChitietComponent,
    ChungloaiComponent,
    GiohangComponent,
    PhanhuuluanComponent,
    BanhangComponent,
    HinhchunhatComponent,
    KiemtraComponent,
    TinhtienthuongComponent,
    XeploaiComponent,
    FilmsComponent,
    AboutComponent,
    ThemsinhvienComponent,
    GuitarshopComponent,
    ChitietguitarComponent,
    GiohangguitarComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '', 	component: PhanhuuluanComponent},       
      { path: 'trangchulap04', 	component: TrangchuComponent}, 
      { path: 'p.macl', component:ChungloaiComponent},
      { path: 'a.macl/:id', component:ChitietComponent},
      { path: 'giohang', component:GiohangComponent},
      { path: 'hcn', 	component: HinhchunhatComponent},
      { path: 'xl', 	component: XeploaiComponent},
      { path: 'ttt', 	component: TinhtienthuongComponent},
      { path: 'bh', 	component: BanhangComponent},
      { path: 'kt', 	component: KiemtraComponent},
      { path: 'film', 	component: FilmsComponent},
      { path: 'film/:url', 	component: AboutComponent},
      { path: 'themsinhvien', 	component: ThemsinhvienComponent},
      { path: 'guitarshop', 	component: GuitarshopComponent},
      { path: 'guitarshop/:i.id', 	component: ChitietguitarComponent},
      { path: 'giohangguitar', 	component: GiohangguitarComponent},
      { path: 'checkout', 	component: CheckoutComponent},
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
