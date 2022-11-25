import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class GemeentenService {
  header = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };
  gemeenteLijstAPI = "https://api.delijn.be/DLKernOpenData/v1/beta/gemeenten";

  gemeenteLijst: Gemeenten[];
  geselecteerdeGemeente: string = "";

  constructor(private _http: HttpClient) {}

  GetGemeentes(): Promise<IGemeenten> {
    return lastValueFrom(this._http.get<IGemeenten>(this.gemeenteLijstAPI, { headers: this.header }));
  }

  async Ophalen() {
    console.log("Gemeentegegevens ophalen");
    await this.GetGemeentes()
      .then((data) => {
        if (typeof data != "undefined") this.gemeenteLijst = data.gemeenten.slice(1);
        this.gemeenteLijst.sort((a, b) => (a.omschrijving < b.omschrijving ? -1 : 1));
        console.log("Gemeentegegevens zijn binnen");
      })
      .catch((error) => {
        this.gemeenteLijst = [];
        this.geselecteerdeGemeente = "";
        console.log("Er is een fout opgetreden");
      });
  }
}

export interface IGemeenten {
  gemeenten: Gemeenten[];
  links: Link[];
}

export interface Gemeenten {
  gemeentenummer: number;
  omschrijving: string;
  links: Link[];
  hoofdGemeente?: HoofdGemeente;
}

export interface HoofdGemeente {
  gemeentenummer: number;
  omschrijving: string;
}

export interface Link {
  rel: Rel;
  url: string;
}

export enum Rel {
  Detail = "detail",
  Haltes = "haltes",
  Lijnen = "lijnen",
  Self = "self",
}
