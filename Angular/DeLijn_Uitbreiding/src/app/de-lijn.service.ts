import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DeLijnService {
  header = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };
  entiteitnummer = 1;
  doorkomsten = 10;

  halteDoorkomsten: IHalteDoorkomsten;
  bestemmingLijst: IDoorkomsten[] = [];
  checkId: number;

  constructor(private _http: HttpClient) {}

  GetBestemmingen(id: number): Promise<IDeLijn> {
    return lastValueFrom(this._http.get<IDeLijn>(`https://api.delijn.be/DLKernOpenData/api/v1/haltes/${this.entiteitnummer}/${id}/real-time?maxAantalDoorkomsten=${this.doorkomsten}`, { headers: this.header }));
  }

  async Ophalen(id: number) {
    this.checkId = id;
    console.log("Haltes ophalen");
    await this.GetBestemmingen(id)
      .then((data) => {
        if (typeof data != "undefined") this.halteDoorkomsten = data.halteDoorkomsten[0];
        this.bestemmingLijst = this.halteDoorkomsten.doorkomsten;
        console.log("Haltes zijn binnen");
      })
      .catch((error) => {
        this.bestemmingLijst = [];
        console.log("Er is een fout opgetreden");
      });
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
