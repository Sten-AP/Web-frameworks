import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-persoonsgegevens",
 templateUrl: "./persoonsgegevens.component.html",
 styleUrls: ["./persoonsgegevens.component.css"],
})
export class PersoonsgegevensComponent implements OnInit {
 naam: string = "";
 achternaam: string = "";
 straatnaam: string = "";
 huisnummer: string = "";
 stad: string = "";
 bewaard: boolean = false;
 
 constructor() {}

 ngOnInit(): void {}
}
