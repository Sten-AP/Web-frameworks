import { Component, OnInit } from "@angular/core";
import { evaluate } from "mathjs";

@Component({
 selector: "app-calculator",
 templateUrl: "./calculator.component.html",
 styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
 rijen = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  [".", "0", "=", "/"],
 ];

 berekening: string = "";

 constructor() {}

 ngOnInit(): void {}

 action(input: string) {
  if (input != "=") this.berekening += input;
  if (input == "=") this.berekening = evaluate(this.berekening);
 }
}
