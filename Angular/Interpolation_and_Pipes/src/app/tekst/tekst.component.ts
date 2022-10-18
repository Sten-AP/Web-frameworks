import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
 selector: "app-tekst",
 templateUrl: "./tekst.component.html",
 styleUrls: ["./tekst.component.css"],
})
export class TekstComponent implements OnInit {
 tijd: number = 0;
 constructor() {
  let moment = require("moment");
  setInterval(() => {
   this.tijd = Number(moment().startOf("hour").fromNow().slice(0, 2)) - Number(moment().format("mm"));
  }, 30000);
 }

 ngOnInit(): void {}
}
