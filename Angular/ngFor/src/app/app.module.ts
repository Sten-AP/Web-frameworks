import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HetWeerComponent } from './het-weer/het-weer.component';
import { PersoonsInformatieComponent } from './persoons-informatie/persoons-informatie.component';
import { AutomerkenComponent } from './automerken/automerken.component';
import { DeelbaarheidComponent } from './deelbaarheid/deelbaarheid.component';

@NgModule({
  declarations: [
    AppComponent,
    HetWeerComponent,
    PersoonsInformatieComponent,
    AutomerkenComponent,
    DeelbaarheidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
