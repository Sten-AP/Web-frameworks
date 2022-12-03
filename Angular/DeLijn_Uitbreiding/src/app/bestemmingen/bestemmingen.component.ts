import { Component, OnInit } from "@angular/core";
import { DeLijnService } from "../de-lijn.service";
import { GemeentenService } from "../gemeenten.service";
import { HaltesService } from "../haltes.service";
@Component({
  selector: "app-bestemmingen",
  templateUrl: "./bestemmingen.component.html",
  styleUrls: ["./bestemmingen.component.css"],
})
export class BestemmingenComponent implements OnInit {
  tijden: string[];
  moment = require("moment");

  constructor(public deLijnService: DeLijnService, public gemeentenService: GemeentenService, public haltesService: HaltesService) {
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
    if (this.moment(tijd) <= this.moment()) return "Geen tijd";
    if (this.moment(this.moment() - this.moment(tijd)).format("HH") == "00") return 60 - this.moment(this.moment() - this.moment(tijd)).format("mm") + " min";
    return this.moment(tijd).format("HH:mm");
  }
}
