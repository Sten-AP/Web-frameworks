import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-willekeurig-getal",
 templateUrl: "./willekeurig-getal.component.html",
 styleUrls: ["./willekeurig-getal.component.css"],
})
export class WillekeurigGetalComponent implements OnInit {
 randomGetal: number = Math.floor(Math.random() * 10);

 constructor() {
  setInterval(() => {
   this.randomGetal = Math.floor(Math.random() * 10);
  }, 2000);
 }

 ngOnInit(): void {}
}
