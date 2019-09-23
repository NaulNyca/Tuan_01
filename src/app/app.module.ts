import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ChungloaiComponent } from './chungloai/chungloai.component';
import { GiohangComponent } from './giohang/giohang.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ChitietComponent,
    ChungloaiComponent,
    GiohangComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: TrangchuComponent}, 
      { path: ':p.macl', component:ChungloaiComponent},
      { path: ':a.macl/:id', component:ChitietComponent},
      { path: 'giohang', component:GiohangComponent},
      { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
