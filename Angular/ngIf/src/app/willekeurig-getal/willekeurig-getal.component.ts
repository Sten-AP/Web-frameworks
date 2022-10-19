import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import * as _ from "lodash";

@Component({
 selector: "app-willekeurig-getal",
 templateUrl: "./willekeurig-getal.component.html",
 styleUrls: ["./willekeurig-getal.component.css"],
})
export class WillekeurigGetalComponent implements OnInit {
 randomGetal: number = _.random(1, 10);

 constructor() {
  setInterval(() => (this.randomGetal = _.random(1, 10)), 2000);
 }

 ngOnInit(): void {}
}
