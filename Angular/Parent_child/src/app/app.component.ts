import { Component, Input } from "@angular/core";

@Component({
 selector: "app-root",
 templateUrl: "./app.component.html",
 styleUrls: ["./app.component.css"],
})
export class AppComponent {
 title = "Parent_child";
 @Input("_min") min: number = 0;
 @Input("_max") max: number = 0;
}
