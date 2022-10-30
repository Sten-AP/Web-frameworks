import { Component, OnInit, Input } from "@angular/core";
import { random } from "lodash";

@Component({
 selector: "app-random-numbers",
 templateUrl: "./random-numbers.component.html",
 styleUrls: ["./random-numbers.component.css"],
})
export class RandomNumbersComponent implements OnInit {
 @Input() _min: number = 0;
 @Input() _max: number = 0;
 getal: number = 0;

 state: boolean = false;
 buttonState: string = "Start";

 constructor() {
  setInterval(() => {
   if (this.state) this.getal = random(this._min, this._max);
   console.log(this.getal);
  }, 1000);
 }

 ngOnInit(): void {}
}
