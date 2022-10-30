import { Component, OnInit } from "@angular/core";
import * as math from "mathjs";

@Component({
 selector: "app-welcome-screen",
 templateUrl: "./welcome-screen.component.html",
 styleUrls: ["./welcome-screen.component.css"],
})
export class WelcomeScreenComponent implements OnInit {
 images: string[] = [];
 imgUrl: string = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;

 constructor() {
  for (let i = 1; i < 153; i++) this.images.push(`https://mdbootstrap.com/img/Photos/Slides/img%20(${i}).jpg`);

  setInterval(() => {
   this.imgUrl = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;
  }, 5000);
 }

 ngOnInit(): void {}
}
