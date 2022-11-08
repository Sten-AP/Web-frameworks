import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MovieplayerComponent } from "./movieplayer/movieplayer.component";
import { TodoComponent } from "./todo/todo.component";
import { RedboxComponent } from "./redbox/redbox.component";

@NgModule({
 declarations: [AppComponent, WelcomeComponent, MovieplayerComponent, TodoComponent, RedboxComponent],
 imports: [
  BrowserModule,
  AppRoutingModule,
  RouterModule.forRoot(
   [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "welcome/movieplayer", component: MovieplayerComponent },
    { path: "welcome/todo", component: TodoComponent },
    { path: "welcome/redbox", component: RedboxComponent },
   ],
   { useHash: true }
  ),
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
