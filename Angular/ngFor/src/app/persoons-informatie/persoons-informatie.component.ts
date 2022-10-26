import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-persoons-informatie",
 templateUrl: "./persoons-informatie.component.html",
 styleUrls: ["./persoons-informatie.component.css"],
})
export class PersoonsInformatieComponent implements OnInit {
 constructor() {
  class Persoon {
   naam: string;
   voornaam: string;
   geboortedatum: string;

   constructor(naam: string, voornaam: string, geboortedatum: string) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.geboortedatum = geboortedatum;
   }
  }
 }

 ngOnInit(): void {}
}
