import { Component, Input, OnInit } from "@angular/core";

@Component({
 selector: "app-random-numbers2",
 templateUrl: "./random-numbers2.component.html",
 styleUrls: ["./random-numbers2.component.css"],
})
export class RandomNumbers2Component implements OnInit {
 public _min: number = 0;
 public _max: number = 0;

 public _state: boolean = false;
 buttonState: string = "Start";

 constructor() {}

 public changeMin(val: string) {
  this._min = Number(val);
 }

 public changeMax(val: string) {
  this._max = Number(val);
 }

 public changeState() {
  this._state = !this._state;
  this.buttonState = "Stop";
  if (!this._state) this.buttonState = "Start";
 }

 ngOnInit(): void {}
}
