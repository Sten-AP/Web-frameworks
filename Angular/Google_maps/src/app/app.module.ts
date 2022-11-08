import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule } from "@agm/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocatiesComponent } from "./locaties/locaties.component";
import { KeuzeLocatieComponent } from './keuze-locatie/keuze-locatie.component';

@NgModule({
 declarations: [AppComponent, LocatiesComponent, KeuzeLocatieComponent],
 imports: [
  BrowserModule,
  AppRoutingModule,
  AgmCoreModule.forRoot({
   apiKey: "AIzaSyCFWW5JzI3JZv-GbajGGZK9xRkeG-vfPtc",
  }),
  RouterModule.forRoot(
   [
    { path: "", redirectTo: "locations", pathMatch: "full" },
    { path: "locations", component: KeuzeLocatieComponent },
    { path: "map/:location", component: LocatiesComponent },
   ],
   { useHash: true }
  ),
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
