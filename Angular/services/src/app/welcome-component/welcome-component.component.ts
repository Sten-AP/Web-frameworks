import { Component, OnInit } from "@angular/core";
import { WelcomeSelectServiceService } from "../welcome-select-service.service";

@Component({
 selector: "app-welcome-component",
 templateUrl: "./welcome-component.component.html",
 styleUrls: ["./welcome-component.component.css"],
})
export class WelcomeComponentComponent implements OnInit {
 service: WelcomeSelectServiceService;

 constructor(service: WelcomeSelectServiceService) {
  this.service = service;
 }

 ngOnInit(): void {}
}
