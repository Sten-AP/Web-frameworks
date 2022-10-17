import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MainPart1Component } from './main-part1/main-part1.component';
import { MainPart2Component } from './main-part2/main-part2.component';
import { Tile1Component } from './tile1/tile1.component';
import { TileLinksComponent } from './tile-links/tile-links.component';
import { TileRechtsComponent } from './tile-rechts/tile-rechts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideMenuComponent,
    FunFactComponent,
    DrinksComponent,
    ContactComponent,
    MainComponent,
    MainPart1Component,
    MainPart2Component,
    Tile1Component,
    TileLinksComponent,
    TileRechtsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
