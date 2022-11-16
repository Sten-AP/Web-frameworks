import { Injectable } from "@angular/core";

@Injectable({
 providedIn: "root",
})
export class WelcomeSelectServiceService {
 images: string[] = [];
 imgUrl: string = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;

 constructor() {
  for (let i = 1; i < 153; i++) this.images.push(`https://mdbootstrap.com/img/Photos/Slides/img%20(${i}).jpg`);

  setInterval(() => {
   this.imgUrl = `https://mdbootstrap.com/img/Photos/Slides/img%20(${math.floor(math.random(1, 152))}).jpg`;
  }, 5000);
 }
}
