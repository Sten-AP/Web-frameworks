import { Component, OnInit } from "@angular/core";
import { WeatherDataService, IWeatherData } from "../weather-data.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  data: any;
  constructor(private service: WeatherDataService) {}

  ngOnInit(): void {}

  getGemeente(gemeente: string) {
    this.service._url = gemeente;
    this.getWeatherData();
  }

  getWeatherData() {
    console.log(this.service.url);

    this.service.weatherData.subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
