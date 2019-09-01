import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafRakeComponent } from './leaf-rake/leaf-rake.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafRakeComponent,
    ListProductComponent,
    SupervisorComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
