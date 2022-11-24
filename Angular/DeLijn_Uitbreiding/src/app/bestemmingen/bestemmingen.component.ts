import { Component, OnInit } from "@angular/core";
import { DeLijnService } from "../de-lijn.service";
@Component({
  selector: "app-bestemmingen",
  templateUrl: "./bestemmingen.component.html",
  styleUrls: ["./bestemmingen.component.css"],
})
export class BestemmingenComponent implements OnInit {
  tijden: string[];
  moment = require("moment");

  constructor(public deLijnService: DeLijnService) {}

  ngOnInit(): void {}

  get lijst() {
    return this.deLijnService.bestemmingLijst;
  }

  getAankomst(tijd: Date) {
    let checkUur = this.moment(this.moment() - this.moment(tijd)).format("HH:mm");
    if (this.moment(tijd).format("HH:mm") == this.moment().format("HH:mm")) return "Geen tijd";
    if (checkUur.slice(0, -3) == "00") return 60 - this.moment(this.moment() - this.moment(tijd)).format("mm") + "'";
    return this.moment(tijd).format("HH:mm");
  }
}
