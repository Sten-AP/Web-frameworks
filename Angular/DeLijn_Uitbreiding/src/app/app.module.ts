import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BestemmingenComponent } from "./bestemmingen/bestemmingen.component";
import { GemeentenSelectieComponent } from './gemeenten-selectie/gemeenten-selectie.component';
import { HalteSelectieComponent } from './halte-selectie/halte-selectie.component';

@NgModule({
  declarations: [AppComponent, BestemmingenComponent, GemeentenSelectieComponent, HalteSelectieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
