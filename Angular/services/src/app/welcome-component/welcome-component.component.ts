import { Component, OnInit } from "@angular/core";
import * as math from "mathjs";
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
  for (let i = 1; i < 153; i++) this.service.images.push(`https://mdbootstrap.com/img/Photos/Slides/img%20(${i}).jpg`);

  setInterval(() => {
   this.service.imgUrl = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;
  }, 5000);
 }

 ngOnInit(): void {}
}
