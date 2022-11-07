import { Component, Input, OnInit } from "@angular/core";

@Component({
 selector: "app-todo-child",
 templateUrl: "./todo-child.component.html",
 styleUrls: ["./todo-child.component.css"],
})
export class TodoChildComponent implements OnInit {
 @Input() title: string = "";
 @Input() maxItems: number = 0;
 items: string[] = [];
 buttonState: boolean = false;

 constructor() {}

 addItem(item: string) {
  if (this.maxItems == 0 || this.items.length < this.maxItems) this.items.push(item);
 }

 removeItem(item: number) {
  this.items.splice(item, 1);
 }

 checkInput(item: String) {
  this.buttonState = false;
  if (item.length > 0) this.buttonState = true;
 }

 ngOnInit(): void {}
}
