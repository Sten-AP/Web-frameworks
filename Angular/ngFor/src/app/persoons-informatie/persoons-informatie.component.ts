import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
@Component({
 selector: "app-persoons-informatie",
 templateUrl: "./persoons-informatie.component.html",
 styleUrls: ["./persoons-informatie.component.css"],
})
export class PersoonsInformatieComponent implements OnInit {
 personen: Persoon[] = [
  new Persoon("Hulsbergen", "Sten", "15/04/2002"),
  new Persoon("Hulsbergen", "Finn", "04/05/2007"),
  new Persoon("Hulsbergen", "Kyan", "02/08/2004"),
  new Persoon("Kapito", "Jos", "25/11/1988"),
  new Persoon("Mie", "Anne", "12/6/1970"),
 ];

 constructor() {
  console.log(this.personen);
 }

 ngOnInit(): void {}
}

class Persoon {
 naam: string;
 voornaam: string;
 geboortedatum: string;
 leeftijd: string;

 constructor(naam: string, voornaam: string, geboortedatum: string) {
  this.naam = naam;
  this.voornaam = voornaam;
  this.geboortedatum = geboortedatum;
  this.leeftijd = "";

  this.berekenLeeftijd(this.geboortedatum);
 }

 berekenLeeftijd(geboortedatum: string) {
  this.leeftijd = moment(geboortedatum, "DD/MM/YYYY").fromNow().slice(0, -10);
  this.leeftijd += ' years old'
 }
}
