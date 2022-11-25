import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HaltesService {
  header = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };

  halteLijst: Halte[];
  geselecteerdeHalte: string;
  temperatuur: number;

  constructor(private _http: HttpClient) {}

  GetHaltes(id: number): Promise<IHaltes> {
    return lastValueFrom(this._http.get<IHaltes>(`https://api.delijn.be/DLKernOpenData/v1/beta/gemeenten/${id}/haltes`, { headers: this.header }));
  }

  async Ophalen(id: number) {
    console.log("Haltegegevens ophalen");
    await this.GetHaltes(id)
      .then((data) => {
        if (typeof data != "undefined") this.halteLijst = data.haltes;
        this.halteLijst.sort((a, b) => (a.omschrijving < b.omschrijving ? -1 : 1));
        console.log("Haltegegevens zijn binnen");
      })
      .catch((error) => {
        console.log("Er is een fout opgetreden");
      });
  }
}

export interface IHaltes {
  haltes: Halte[];
  links: Link[];
}

export interface Halte {
  entiteitnummer: string;
  haltenummer: string;
  omschrijving: string;
  omschrijvingLang: string;
  gemeentenummer: number;
  omschrijvingGemeente: OmschrijvingGemeente;
  districtCode: DistrictCode;
  geoCoordinaat: GeoCoordinaat;
  halteToegankelijkheden: string[];
  hoofdHalte: null;
  taal?: Taal;
  links: Link[];
}

export enum DistrictCode {
  Mee = "MEE",
  Mle = "MLE",
}

export interface GeoCoordinaat {
  latitude: number;
  longitude: number;
}

export interface Link {
  rel: Rel;
  url: string;
}

export enum Rel {
  Detail = "detail",
  Self = "self",
}

export enum OmschrijvingGemeente {
  Meer = "Meer",
}

export enum Taal {
  N = "N",
}
