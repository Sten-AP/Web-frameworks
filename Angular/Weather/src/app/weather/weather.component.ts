import { Component, OnInit } from "@angular/core";
import { WeatherDataService, IWeatherData } from "../weather-data.service";
@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  data: any;
  imgUrl: string;

  constructor(private service: WeatherDataService) {}

  ngOnInit(): void {}

  getGemeente(gemeente: string) {
    this.service._url = gemeente;
    this.service.weatherData.subscribe((data) => {
      this.data = data;
      this.imgUrl = `https://openweathermap.org/img/w/0${Math.floor(this.data.main.temp - 273.15) % 4}d.png`;
    });
  }
}
