import { Component, OnInit } from "@angular/core";
import { TextService } from "../text.service";

@Component({
 selector: "app-text",
 templateUrl: "./text.component.html",
 styleUrls: ["./text.component.css"],
})
export class TextComponent implements OnInit {
 service: TextService;

 constructor(service: TextService) {
  this.service = service;
 }

 ngOnInit(): void {}
}
