import { Component, OnInit } from "@angular/core";
import { WelcomeSelectServiceService } from "../welcome-select-service.service";

@Component({
 selector: "app-welcome-select-component",
 templateUrl: "./welcome-select-component.component.html",
 styleUrls: ["./welcome-select-component.component.css"],
})
export class WelcomeSelectComponentComponent implements OnInit {
 service: WelcomeSelectServiceService;

 constructor(service: WelcomeSelectServiceService) {
  this.service = service;
 }

 ngOnInit(): void {}
}
