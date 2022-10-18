import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-huidige-tijd",
 templateUrl: "./huidige-tijd.component.html",
 styleUrls: ["./huidige-tijd.component.css"],
})
export class HuidigeTijdComponent implements OnInit {
 tijd: Date = new Date();

 constructor() {
  setInterval(() => (this.tijd = new Date()), 1000);
 }

 ngOnInit(): void {}
}
