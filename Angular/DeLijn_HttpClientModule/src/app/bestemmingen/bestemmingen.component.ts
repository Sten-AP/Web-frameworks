import { Component, OnInit } from "@angular/core";
import { DeLijnService, IDeLijn } from "../de-lijn.service";
import { Moment } from "moment";

@Component({
  selector: "app-bestemmingen",
  templateUrl: "./bestemmingen.component.html",
  styleUrls: ["./bestemmingen.component.css"],
})
export class BestemmingenComponent implements OnInit {
  lijst: any;
  tijden: string[];
  moment = require("moment");

  constructor(private service: DeLijnService) {
    setInterval(() => {
      this.getData();
    }, 30000);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.Lijst.subscribe((data) => {
      this.lijst = data.halteDoorkomsten[0].doorkomsten;
      this.tijden = [];

      for (let i = 0; i < this.lijst.length; i++) {
        if (this.moment(this.lijst[i]["real-timeTijdstip"]).format("HH:mm") == this.moment().format("HH:mm")) {
          this.tijden.push("Geen tijd");
        } else if (
          this.moment(this.moment() - this.moment(this.lijst[i]["real-timeTijdstip"]))
            .format("HH:mm")
            .slice(0, -3) == "00"
        ) {
          this.tijden.push(60 - this.moment(this.moment() - this.moment(this.lijst[i]["real-timeTijdstip"])).format("mm") + "'");
        } else {
          this.tijden.push(this.moment(this.lijst[i]["real-timeTijdstip"]).format("HH:mm"));
        }
      }
    });
  }
}
