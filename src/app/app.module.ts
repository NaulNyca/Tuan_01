import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
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
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
