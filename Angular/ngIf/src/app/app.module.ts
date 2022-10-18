import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WillekeurigGetalComponent } from './willekeurig-getal/willekeurig-getal.component';
import { WelkomstcomponentComponent } from './welkomstcomponent/welkomstcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    WillekeurigGetalComponent,
    WelkomstcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
