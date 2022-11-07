import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-todo-parent",
 templateUrl: "./todo-parent.component.html",
 styleUrls: ["./todo-parent.component.css"],
})
export class TodoParentComponent implements OnInit {
 title: string = "Todo lijst";
 aantal: number = 0;
 constructor() {}

 ngOnInit(): void {}

 changeTitle(val: string) {
  this.title = val;
 }

 changeAantal(val: string) {
  this.aantal = Number(val);
 }
}
