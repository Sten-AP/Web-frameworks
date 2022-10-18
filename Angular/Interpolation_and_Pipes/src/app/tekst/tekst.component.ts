import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
 selector: "app-tekst",
 templateUrl: "./tekst.component.html",
 styleUrls: ["./tekst.component.css"],
})
export class TekstComponent implements OnInit {
 tijd: string = "";
 constructor() {
  var moment = require("moment");

  // moment().format("MMMM Do YYYY, h:mm:ss a");
  // moment().startOf("day").fromNow();
  this.tijd = moment().startOf("ss");

  setInterval(() => {
   this.tijd = moment().fromNow();
  }, 500);
 }

 ngOnInit(): void {}
}
