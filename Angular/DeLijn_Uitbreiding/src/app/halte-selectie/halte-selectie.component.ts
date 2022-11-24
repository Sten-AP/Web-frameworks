import { Component, OnInit } from "@angular/core";
import { HaltesService } from "../haltes.service";
import { GemeentenService } from "../gemeenten.service";
import { DeLijnService } from "../de-lijn.service";

@Component({
  selector: "app-halte-selectie",
  templateUrl: "./halte-selectie.component.html",
  styleUrls: ["./halte-selectie.component.css"],
})
export class HalteSelectieComponent implements OnInit {
  constructor(private deLijnService: DeLijnService, public haltesService: HaltesService, public gemeentenService: GemeentenService) {}

  get halteLijst() {
    return this.haltesService.halteLijst;
  }

  selectHalte(halte: string) {
    for (let i = 0; i < this.halteLijst.length; i++) {
      if (this.halteLijst[i].omschrijving == halte) {
        this.deLijnService.Ophalen(Number(this.halteLijst[i].haltenummer));
        break;
      }
    }
  }

  ngOnInit(): void {}
}
