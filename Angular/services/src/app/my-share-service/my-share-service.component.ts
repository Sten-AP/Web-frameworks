import { Component, OnInit } from "@angular/core";
import { MyShareServiceService } from "../my-share-service.service";

@Component({
 selector: "app-my-share-service",
 templateUrl: "./my-share-service.component.html",
 styleUrls: ["./my-share-service.component.css"],
})
export class MyShareServiceComponent implements OnInit {
 service: MyShareServiceService;
 button: number = 0;
 constructor(service: MyShareServiceService) {
  this.service = service;
 }

 ngOnInit(): void {}

 get counter() {
  return this.service.counter;
 }

 setVal() {
  this.button = this.counter;
 }

 setCounter(value: string) {
  this.service.counter = Number(value);
 }
}
