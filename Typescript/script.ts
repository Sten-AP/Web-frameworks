// Import stylesheets
import { GestructureerdeMededeling } from "./gestructureerdeMededeling";
import "./style.css";

// Oef 1
const car: string = "bmw";
const number: number = 5;
const bool: boolean = false;

const car2 = "honda";
const number2 = 8;
const bool2 = false;

const arr: Array<number> = [2, 5, 8, 10];
enum Colors {
 WHITE = 0,
 BLACK = 1,
 BLUE = 3,
}
const arr2: Array<boolean | number> = [true, false, 4, 6];
const tuple: [number, string] = [1, "Steve"];
const number3: number | null = null;

// Oef 2a
function berekenKwadraat(getal: number): number {
 return getal * getal;
}

function bekijkTekst(tekst: string, count: number): string[] {
 return [String(count), tekst];
}

function anonymous(tekst: string, separator: string = "-") {
 return tekst.split(separator);
}

function berekenProduct(x: number, y: number): number {
 return x * y;
}

// Fat arrow syntax
let berekenKwadraat2 = (getal: number): number => {
 return getal * getal;
};

let bekijkTekst2 = (tekst: string, count: number): string[] => {
 return [String(count), tekst];
};

let anonymous2 = (tekst: string, separator: string = "-") => {
 return tekst.split(separator);
};

let berekenProduct2 = (x: number, y: number): number => {
 return x * y;
};

// Oef 2b
let GM = (jaar: number, klantNr: number = 0, bestelNr: number = 0) => {
 let J = String(jaar);
 if (J.length == 4) J = J.slice(1);
 while (J.length < 3) J = "0" + J;

 let K = String(klantNr);
 while (K.length < 4) K = "0" + K;

 let B = String(bestelNr);
 while (B.length < 3) B = "0" + B;

 let C = checksum(Number(J + K + B));

 return "+++" + J + "/" + K + "/" + B + C + "+++";
};

let checksum = (getal: number) => getal % 97;

// console.log(GM(2017, 123, 1));
// console.log(GM(17, 123, 1));
// console.log(GM(2017));

// Oef 3a
let namen: string[] = ["Muhammed", "Andie", "Sven", "Kelly", "Nabil", "Silke"];

namen.filter((naam) => naam.length <= 4);
// console.log(namen);
namen.filter((naam) => naam.charAt(0) == "S");
// console.log(namen);
namen.filter((naam, index) => index % 2 === 1);
// console.log(namen);

// Oef 3b

namen.sort((naam1, naam2) => naam1.length - naam2.length);
// console.log(namen);
namen.sort((naam1, naam2) => naam2.length - naam1.length);
// console.log(namen);

let nummers: number[] = [4, 99, 1, 2, 49];

nummers.sort();
// console.log(nummers);

// Oef 5
import { GestructureerdeMededeling as GestrMed } from "./gestructureerdeMededeling";

let med1 = new GestrMed(2017, 123, 1);
let med2 = new GestrMed(17, 123, 1);
let med3 = new GestrMed(2017);

// console.log(med1.GM());
// console.log(med2.GM());
// console.log(med3.GM());

// Oef 6
import * as math from "mathjs";
// import * as lodash from 'lodash';
// import * as moment from 'moment';

const a = math.unit("50 inch");
const b = a.to("cm");
// console.log(String(a));
// console.log(String(b));

// Oef 7
