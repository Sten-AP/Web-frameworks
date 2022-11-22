import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DeLijnService {
  header = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };
  entiteitnummer = 1;
  haltenummer = 105488;
  doorkomsten = 10;
  url = `https://api.delijn.be/DLKernOpenData/api/v1/haltes/${this.entiteitnummer}/${this.haltenummer}/real-time?maxAantalDoorkomsten=${this.doorkomsten}`;

  constructor(private _http: HttpClient) {}

  get Lijst(): Observable<IDeLijn> {
    return this._http.get<IDeLijn>(this.url, { headers: this.header });
  }
}

export interface IDeLijn {
  halteDoorkomsten: IHalteDoorkomsten[];
  links: ILink[];
  doorkomstNotas: any[];
  ritNotas: any[];
  omleidingen: any[];
}

export interface IHalteDoorkomsten {
  haltenummer: string;
  doorkomsten: IDoorkomsten[];
}

export interface IDoorkomsten {
  entiteitnummer: string;
  lijnnummer: number;
  richting: string;
  ritnummer: string;
  bestemming: string;
  vias: string[];
  dienstregelingTijdstip: Date;
  "real-timeTijdstip": Date;
  vrtnum: string;
  predictionStatussen: string[];
  links: ILink[];
}

export interface ILink {
  rel: Rel;
  url: string;
}

export enum Rel {
  Halte = "halte",
  Lijnrichting = "lijnrichting",
  Self = "self",
}
