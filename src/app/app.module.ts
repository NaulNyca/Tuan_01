import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeafRakeComponent } from './leaf-rake/leaf-rake.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { GioComponent } from './gio/gio.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentinformationComponent } from './studentinformation/studentinformation.component';


@NgModule({
  declarations: [
    AppComponent,
    LeafRakeComponent,
    ListProductComponent,
    SupervisorComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    GioComponent,
    StudentlistComponent,
    StudentinformationComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: StudentlistComponent }, 
      {path: 'products', component:ListProductComponent},
      {path: 'giohang', component:GioComponent},
      {path: 'studentlist', component:StudentlistComponent},
      {path: 'studentinformation/:ID', component:StudentinformationComponent},
      { path: 'products/:productId', component: LeafRakeComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
