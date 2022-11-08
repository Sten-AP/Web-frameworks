import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-keuze-locatie",
 templateUrl: "./keuze-locatie.component.html",
 styleUrls: ["./keuze-locatie.component.css"],
})
export class KeuzeLocatieComponent implements OnInit {
 locaties = ["AP Hogeschool", "Werk", "Huis mama", "Huis papa"];
 
 constructor() {}

 ngOnInit(): void {}
}
