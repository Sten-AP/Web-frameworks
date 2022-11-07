import { Component, OnInit, Input } from "@angular/core";
import { random } from "lodash";

@Component({
 selector: "app-random-numbers",
 templateUrl: "./random-numbers.component.html",
 styleUrls: ["./random-numbers.component.css"],
})
export class RandomNumbersComponent implements OnInit {
 @Input() public _min: number = 0;
 @Input() public _max: number = 0;
 getal: number = 0;

 @Input() public _state: boolean = false;

 constructor() {
  setInterval(() => {
   if (this._state) this.getal = random(this._min, this._max);
  }, 1000);
 }

 ngOnInit(): void {}
}
