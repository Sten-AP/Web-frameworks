import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RandomNumbersComponent } from "./random-numbers/random-numbers.component";
import { RandomNumbersParentComponent } from "./random-numbers-parent/random-numbers-parent.component";
import { TodoChildComponent } from "./todo-child/todo-child.component";

@NgModule({
 declarations: [AppComponent, RandomNumbersComponent, RandomNumbersParentComponent, TodoChildComponent],
 imports: [BrowserModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
