import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-automerken",
 templateUrl: "./automerken.component.html",
 styleUrls: ["./automerken.component.css"],
})
export class AutomerkenComponent implements OnInit {
 automerken: Automerk[] = [new Automerk("Ford"), new Automerk("Jaguar", ["F-Pace", "E-pace"]), new Automerk("Mercedes")];
 constructor() {}

 ngOnInit(): void {}
}

class Automerk {
 merk: string;
 model: string[];
 constructor(merk: string, model: string[] = []) {
  this.merk = merk;
  this.model = model;
 }
}
