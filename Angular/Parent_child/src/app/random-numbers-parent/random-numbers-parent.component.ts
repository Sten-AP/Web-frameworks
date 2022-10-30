import { Component, OnInit, Input } from "@angular/core";

@Component({
 selector: "app-random-numbers-parent",
 templateUrl: "./random-numbers-parent.component.html",
 styleUrls: ["./random-numbers-parent.component.css"],
})
export class RandomNumbersParentComponent implements OnInit {
 @Input("_min") _min: number = 0;
 @Input("_max") _max: number = 0;

 state: boolean = false;
 buttonState: string = "Start";
 constructor() {}

 ngOnInit(): void {}

 changeMin(val: string) {
  this._min = Number(val);
 }

 changeMax(val: string) {
  this._max = Number(val);
 }

 changeState() {
  this.state = !this.state;
  this.buttonState = "Stop";
  if (!this.state) this.buttonState = "Start";
 }
}
