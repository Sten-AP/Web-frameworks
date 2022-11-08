import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-movieplayer",
 templateUrl: "./movieplayer.component.html",
 styleUrls: ["./movieplayer.component.css"],
})
export class MovieplayerComponent implements OnInit {
 w: number = 640;
 h: number = 360;
 buttonState: boolean = false;

 constructor() {}

 ngOnInit(): void {}

 changeRes(input: string) {
  this.w = Number(input.split("x")[0]);
  this.h = Number(input.split("x")[1]);
 }

 videoState(state: boolean) {
  this.buttonState = state;
  let video = document.getElementById("video") as HTMLVideoElement;
  if (this.buttonState) video.play();
  if (!this.buttonState) video.pause();
 }
}
