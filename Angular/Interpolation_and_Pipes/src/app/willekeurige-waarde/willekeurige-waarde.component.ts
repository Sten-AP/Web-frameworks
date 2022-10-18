import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-willekeurige-waarde",
 templateUrl: "./willekeurige-waarde.component.html",
 styleUrls: ["./willekeurige-waarde.component.css"],
})
export class WillekeurigeWaardeComponent implements OnInit {
 waarde: number = Math.floor(Math.random() * 100) + 1;
 constructor() {
  setInterval(() => (this.waarde = Math.floor(Math.random() * 100) + 1), 2000);
 }

 ngOnInit(): void {}
}
