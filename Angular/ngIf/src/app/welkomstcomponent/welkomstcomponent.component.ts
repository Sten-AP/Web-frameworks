import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
@Component({
 selector: "app-welkomstcomponent",
 templateUrl: "./welkomstcomponent.component.html",
 styleUrls: ["./welkomstcomponent.component.css"],
})
export class WelkomstcomponentComponent implements OnInit {
 tijd: string = moment().format().slice(11, -6);
 uur: number = Number(this.tijd.slice(0, -6));

 constructor() {
  setInterval(() => {
   this.tijd = moment().format().slice(11, -6);
   this.uur = Number(this.tijd.slice(0, -6));
  }, 1000);
 }

 ngOnInit(): void {}
}
