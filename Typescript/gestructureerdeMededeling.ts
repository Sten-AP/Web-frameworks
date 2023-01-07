// Oef 4
export class GestructureerdeMededeling {
 private _jaar: number;
 private _klantNr: number;
 private _bestelNr: number;

 constructor(jaar: number, klantNr: number = 0, bestelNr: number = 0) {
  this._jaar = jaar;
  this._klantNr = klantNr;
  this._bestelNr = bestelNr;
 }

 GM() {
  let J = String(this._jaar);
  if (J.length == 4) J = J.slice(1);
  while (J.length < 3) J = "0" + J;

  let K = String(this._klantNr);
  while (K.length < 4) K = "0" + K;

  let B = String(this._bestelNr);
  while (B.length < 3) B = "0" + B;

  let C = this.checksum(Number(J + K + B));

  return "+++" + J + "/" + K + "/" + B + C + "+++";
 }

 checksum(getal: number) {
  return getal % 97;
 }
}
