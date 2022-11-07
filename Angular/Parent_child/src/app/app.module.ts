import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RandomNumbersComponent } from "./random-numbers/random-numbers.component";
import { TodoChildComponent } from "./todo-child/todo-child.component";
import { RandomNumbers2Component } from './random-numbers2/random-numbers2.component';
import { TodoParentComponent } from './todo-parent/todo-parent.component';

@NgModule({
 declarations: [AppComponent, RandomNumbersComponent, TodoChildComponent, RandomNumbers2Component, TodoParentComponent],
 imports: [BrowserModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
