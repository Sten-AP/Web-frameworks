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

  constructor(public deLijnService: DeLijnService) {
    setInterval(() => {
      if (deLijnService.bestemmingLijst.length > 0) this.getAankomst;
    }, 5000);
    setInterval(() => {
      if (deLijnService.bestemmingLijst.length > 0) this.deLijnService.Ophalen(this.deLijnService.checkId);
    }, 30000);
  }

  ngOnInit(): void {}

  get lijst() {
    return this.deLijnService.bestemmingLijst;
  }

  getAankomst(tijd: Date) {
    let checkUur = this.moment(this.moment() - this.moment(tijd)).format("HH");
    if (this.moment(tijd) <= this.moment()) return "Geen tijd";
    if (checkUur == "00") return (this.moment().format("mm") - this.moment(tijd).format("mm")) * -1 + " min";
    return this.moment(tijd).format("HH:mm");
  }
}
