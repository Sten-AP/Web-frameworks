import { Component, OnInit } from "@angular/core";
import { DeLijnService, IDeLijn } from "../de-lijn.service";

@Component({
  selector: "app-bestemmingen",
  templateUrl: "./bestemmingen.component.html",
  styleUrls: ["./bestemmingen.component.css"],
})
export class BestemmingenComponent implements OnInit {
  lijst: any;
  tijden: Date[];
  dispTijden: any;
  datum: Date = new Date();

  constructor(private service: DeLijnService) {
    setInterval(() => {
      this.getData();
    }, 10000);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.Lijst.subscribe((data) => {
      this.lijst = data.halteDoorkomsten[0].doorkomsten;
      this.tijden = [];
      for (let i = 0; i < this.lijst.length; i++) {
        this.tijden.push(new Date(this.lijst[i]["real-timeTijdstip"]));
      }
      this.dispTijden = [];
      for (let i = 0; i < this.tijden.length; i++) {
        if (this.tijden[i] != undefined) {
          if (this.tijden[i].getHours() == this.datum.getHours()) {
            this.dispTijden.push(String(60 - this.tijden[i].getMinutes()));
          } else {
            this.dispTijden.push(`${this.tijden[i].getHours()}:${this.tijden[i].getMinutes()}`);
          }
        }
      }
      console.log(this.dispTijden);
    });
  }
}
