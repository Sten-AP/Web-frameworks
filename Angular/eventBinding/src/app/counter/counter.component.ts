import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  button: number = 0;
  counter: number = 0;
  
  constructor() {}

  ngOnInit(): void {}

  changeVal() {
    this.button = this.counter;
  }

  SetCounter(value: string) {
    this.counter = Number(value);
  }
}
