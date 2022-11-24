import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DeLijnService {
  header = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };
  entiteitnummer = 1;
  doorkomsten = 10;

  halteDoorkomsten: IHalteDoorkomsten;
  bestemmingLijst: IDoorkomsten[];

  constructor(private _http: HttpClient) {}

  GetBestemmingen(id: number) {
    let deLijnAPI = `https://api.delijn.be/DLKernOpenData/api/v1/haltes/${this.entiteitnummer}/${id}/real-time?maxAantalDoorkomsten=${this.doorkomsten}`;
    return this._http.get<IDeLijn>(deLijnAPI, { headers: this.header }).toPromise();
  }

  async Ophalen(id: number) {
    console.log("Haltes ophalen");
    await this.GetBestemmingen(id)
      .then((data) => {
        if (typeof data != "undefined") this.halteDoorkomsten = data.halteDoorkomsten[0];
        this.bestemmingLijst = this.halteDoorkomsten.doorkomsten
        console.log("Haltes zijn binnen");
      })
      .catch((error) => {
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
