import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MyShareServiceComponent } from "./my-share-service/my-share-service.component";
import { WelcomeComponentComponent } from "./welcome-component/welcome-component.component";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { WelcomeSelectComponentComponent } from "./welcome-select-component/welcome-select-component.component";
import { TextComponent } from "./text/text.component";
import { TextToggleComponent } from "./text-toggle/text-toggle.component";

@NgModule({
 declarations: [AppComponent, MyShareServiceComponent, WelcomeComponentComponent, LifecycleComponent, WelcomeSelectComponentComponent, TextComponent, TextToggleComponent],
 imports: [BrowserModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
