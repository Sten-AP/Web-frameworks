import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, PokemonComponent, PokemonDetailsComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent },
        { path: "pokemon", component: PokemonComponent },
        { path: "pokemon/:id", component: PokemonDetailsComponent },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
