import { Component, OnInit } from "@angular/core";
import { DeLijnService, IDeLijn } from "../de-lijn.service";

@Component({
  selector: "app-bestemmingen",
  templateUrl: "./bestemmingen.component.html",
  styleUrls: ["./bestemmingen.component.css"],
})
export class BestemmingenComponent implements OnInit {
  lijst: any;

  constructor(private service: DeLijnService) {}

  ngOnInit(): void {
    this.service.Lijst.subscribe((data) => {
      this.lijst = data.halteDoorkomsten[0].doorkomsten;
    });
  }
}
