import { Component, OnInit } from "@angular/core";
import * as math from "mathjs";
import { WelcomeSelectServiceService } from "../welcome-select-service.service";

@Component({
 selector: "app-welcome-select-component",
 templateUrl: "./welcome-select-component.component.html",
 styleUrls: ["./welcome-select-component.component.css"],
})
export class WelcomeSelectComponentComponent implements OnInit {
 images: string[] = [];
 imgUrl: string = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;
 service: WelcomeSelectServiceService;

 constructor(service: WelcomeSelectServiceService) {
  this.service = service;
 }

 ngOnInit(): void {}
}
