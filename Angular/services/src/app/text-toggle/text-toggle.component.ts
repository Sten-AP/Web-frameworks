import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-text-toggle",
 templateUrl: "./text-toggle.component.html",
 styleUrls: ["./text-toggle.component.css"],
})
export class TextToggleComponent implements OnInit {
 visible: boolean = true;
 state: string = "Hide";

 constructor() {}

 changeState() {
  this.visible = !this.visible;
  this.state = "Hide";
  if (this.visible) this.state = "Show";
 }

 ngOnInit(): void {}
}
