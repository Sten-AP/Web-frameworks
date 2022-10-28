import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-red-box",
  templateUrl: "./red-box.component.html",
  styleUrls: ["./red-box.component.css"],
})
export class RedBoxComponent implements OnInit {
  coord: string = "";

  constructor() {}

  ngOnInit(): void {}

  DoSomething(event: MouseEvent) {
    let x = event.offsetX + 1;
    let y = event.offsetY + 1;
    this.coord = x + " / " + y;
  }
}
