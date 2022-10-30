import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { SelectComponent } from './select/select.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { PersoonsgegevensComponent } from './persoonsgegevens/persoonsgegevens.component';

@NgModule({
 declarations: [AppComponent, CalculatorComponent, SelectComponent, WelcomeScreenComponent, PersoonsgegevensComponent],
 imports: [BrowserModule, AppRoutingModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
