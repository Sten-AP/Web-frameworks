import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
 selector: "app-locaties",
 templateUrl: "./locaties.component.html",
 styleUrls: ["./locaties.component.css"],
})
export class LocatiesComponent implements OnInit {
 locaties = [
  { name: "AP Hogeschool", lat: 51.22992308442419, lng: 4.415974052972213 },
  { name: "Werk", lat: 51.3029250751637, lng: 4.5696546755186604 },
  { name: "Huis mama", lat: 51.30334556598092, lng: 4.5764176618406545 },
  { name: "Huis papa", lat: 51.40813024660502, lng: 4.9903873045073945 },
 ];

 locx: number = 0;
 locy: number = 0;

 constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
  this.chekPos();
 }

 ngOnChanges(): void {
  this.chekPos();
 }

 moveMap(locatie: number) {
  this.locx = this.locaties[locatie].lat;
  this.locy = this.locaties[locatie].lng;
 }

 chekPos() {
  this.route.paramMap.subscribe((params) => {
   for (let i = 0; i < this.locaties.length; i++) {
    if (params.get("location") == this.locaties[i].name) {
     this.moveMap(i);
     break;
    }
   }
  });
 }
}
