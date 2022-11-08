import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-todo",
 templateUrl: "./todo.component.html",
 styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
 items: string[] = [];
 buttonState: boolean = false;

 constructor() {}

 ngOnInit(): void {}

 addItem(item: string) {
  this.items.push(item);
 }

 removeItem(item: number) {
  this.items.splice(item, 1);
 }

 checkInput(item: String) {
  this.buttonState = false;
  if (item.length > 0) this.buttonState = true;
 }
}
