import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReafRakeComponent } from './reaf-rake/reaf-rake.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReafRakeComponent,
    ListProductComponent,
    SupervisorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
