import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HuidigeTijdComponent } from './huidige-tijd/huidige-tijd.component';
import { TellerComponent } from './teller/teller.component';
import { WillekeurigeWaardeComponent } from './willekeurige-waarde/willekeurige-waarde.component';
import { TekstComponent } from './tekst/tekst.component';

@NgModule({
  declarations: [
    AppComponent,
    HuidigeTijdComponent,
    TellerComponent,
    WillekeurigeWaardeComponent,
    TekstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
