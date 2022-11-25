import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeerService {
  url: string;
  temperatuur: IMain;
  constructor(private _http: HttpClient) {}

  GetweerData(gemeente: string): Promise<IWeerData> {
    return lastValueFrom(this._http.get<IWeerData>(`http://api.openweathermap.org/data/2.5/weather?q=${gemeente}&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53`));
  }

  async Ophalen(gemeente: string) {
    console.log("Temperatuur ophalen");
    await this.GetweerData(gemeente)
      .then((data) => {
        if (typeof data != "undefined") this.temperatuur = data.main;
        this.url = `https://openweathermap.org/img/w/0${Math.floor((this.temperatuur.temp - 273.15) % 4)}d.png`;
        console.log("Temperatuur is binnen");
      })
      .catch((error) => {
        this.url = "";
        console.log("Er is een fout opgetreden");
      });
  }
}

export interface IWeerData {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IClouds {
  all: number;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWind {
  speed: number;
  deg: number;
}
