import { Component, OnInit } from "@angular/core";
import { GemeentenService } from "../gemeenten.service";
import { HaltesService } from "../haltes.service";
import { WeerService } from "../weer.service";
@Component({
  selector: "app-gemeenten-selectie",
  templateUrl: "./gemeenten-selectie.component.html",
  styleUrls: ["./gemeenten-selectie.component.css"],
})
export class GemeentenSelectieComponent implements OnInit {
  constructor(public gemeentenService: GemeentenService, private haltesService: HaltesService, public weerService: WeerService) {}

  get gemeentes() {
    return this.gemeentenService.gemeenteLijst;
  }

  selectGemeente(gemeente: string) {
    if (gemeente != "") {
      for (let i = 0; i < this.gemeentes.length; i++) {
        if (this.gemeentes[i].omschrijving == gemeente.toUpperCase()) {
          this.haltesService.Ophalen(this.gemeentes[i].gemeentenummer);
          break;
        }
      }
    }
  }

  ngOnInit(): void {
    this.gemeentenService.Ophalen();
  }
}
