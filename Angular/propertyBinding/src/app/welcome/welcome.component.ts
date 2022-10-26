import { Component, OnInit } from "@angular/core";
import * as math from "mathjs";
@Component({
 selector: "app-welcome",
 templateUrl: "./welcome.component.html",
 styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
 imgUrl: string = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + math.floor(math.random(1, 152)) + ").jpg";
 constructor() {
  setInterval(() => {
   this.imgUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + math.floor(math.random(1, 152)) + ").jpg";
  }, 5000);
 }

 ngOnInit(): void {}
}
