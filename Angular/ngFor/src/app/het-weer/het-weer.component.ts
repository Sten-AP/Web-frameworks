import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-het-weer",
  templateUrl: "./het-weer.component.html",
  styleUrls: ["./het-weer.component.css"],
})
export class HetWeerComponent implements OnInit {
  gegevens = [
    { land: "Anchorage", graden: 2 },
    { land: "Brussel", graden: 23 },
    { land: "Osaka", graden: 12 },
    { land: "Auckland", graden: 3 },
    { land: "Kaapstad", graden: 8 },
  ];

  constructor() {
    setInterval(() => {
      for (let i = 0; i < this.gegevens.length; i++) {
        this.gegevens[i].graden = _.random(25);
      }
    }, 2000);
  }

  ngOnInit(): void {}
}
