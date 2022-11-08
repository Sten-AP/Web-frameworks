import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-redbox",
 templateUrl: "./redbox.component.html",
 styleUrls: ["./redbox.component.css"],
})
export class RedboxComponent implements OnInit {
 coord: string = "";

 constructor() {}

 ngOnInit(): void {}

 DoSomething(event: MouseEvent) {
  let x = event.offsetX + 1;
  let y = event.offsetY + 1;
  this.coord = x + " / " + y;
 }
}
