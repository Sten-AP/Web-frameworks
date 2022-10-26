import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-deelbaarheid",
 templateUrl: "./deelbaarheid.component.html",
 styleUrls: ["./deelbaarheid.component.css"],
})
export class DeelbaarheidComponent implements OnInit {
 getallen: number[] = [2, 4, 5, 6, 8, 9, 10, 14];
 constructor() {}

 ngOnInit(): void {}
}
