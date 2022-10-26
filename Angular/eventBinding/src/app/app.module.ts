import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { RedBoxComponent } from './red-box/red-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RedBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
