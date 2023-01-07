// Oef 1
textBox = document.getElementById("text");
textLabel = document.getElementById("textLabel");

textBox.addEventListener("focusout", (event) => {
 textLabel.innerText = textBox.value;
});

// Oef 2
textBox2 = document.getElementById("text2");
textLabel2 = document.getElementById("textLabel2");

textBox2.addEventListener("input", (event) => {
 textLabel2.innerText = textBox2.value;
});

// Oef 3
vierkant = document.getElementById("vierkant");
vierkantLocatie = vierkant.getBoundingClientRect();

vierkant.addEventListener("mousemove", (event) => {
 x = event.layerX - vierkantLocatie.left;
 y = event.layerY - vierkantLocatie.top;
 vierkant.innerText = x + "," + y;
});

// Oef 4
date = document.getElementById("date");
tijd();

setInterval(() => {
 tijd();
}, 1000);

function tijd() {
 newDate = new Date();
 date.innerText = "De huidige tijd: " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
}

// Oef 6
auto = document.getElementById("auto");
kleur = document.getElementById("kleur");
uitkomst = document.getElementById("uitkomst");

auto.addEventListener("change", (event) => {
 kleur.selectedIndex = Math.floor(Math.random() * 3) + 1;
 text = "Je hebt een " + auto.value + " met de kleur " + kleur.value + ".";
 deleteText();
});

kleur.addEventListener("change", (event) => {
 text = "Je hebt de kleur gewijzigd naar " + kleur.value + " voor je " + auto.value + ".";
 deleteText();
});

function deleteText() {
 if (kleur.selectedIndex != 0 && auto.selectedIndex != 0) {
  uitkomst.innerText = text;
  setTimeout(() => {
   uitkomst.innerText = "";
  }, 2000);
 }
}

// Oef 7 en 8 en 9
pageButton1 = document.getElementById("pageButton1");
pageButton2 = document.getElementById("pageButton2");
pageButton3 = document.getElementById("pageButton3");
pageButton4 = document.getElementById("pageButton4");

nav = document.getElementById("page_nav");
page1 = document.getElementById("page1");
page2 = document.getElementById("page2");
page3 = document.getElementById("page3");
page4 = document.getElementById("page4");

nav.className = "hidden";
page1.className = "card hidden";
page2.className = "card hidden";
page3.className = "hidden";
page4.className = "hidden";

url = "http://192.168.1.113:8080/";
loaded = false;

pageButton1.addEventListener("click", (event) => {
 selectPage1();
 window.history.pushState({}, null, url + "#/page1");
});

pageButton2.addEventListener("click", (event) => {
 selectPage2();
 window.history.pushState({}, null, url + "#/page2");
});

pageButton3.addEventListener("click", (event) => {
 selectPage3();
 window.history.pushState({}, null, url + "#/page3");
});

pageButton4.addEventListener("click", (event) => {
 selectPage4();
 window.history.pushState({}, null, url + "#/page4");
});

if (window.history) {
 window.addEventListener("hashchange", (event) => {
  window.history.pushState({}, null, event.newURL);
  if (event.newURL == url + "#/page1" || event.newURL == url + "#/page2" || event.newURL == url + "#/page3" || event.newURL == url + "#/page4") {
   document.getElementById("page0").className = "hidden";
   document.getElementById("page0_1").className = "hidden";
   nav.className = "";
  }
  if (event.newURL == url + "#/page1") selectPage1();
  if (event.newURL == url + "#/page2") selectPage2();
  if (event.newURL == url + "#/page3") selectPage3();
  if (event.newURL == url + "#/page4") selectPage4();
 });
}

function selectPage1() {
 pageButton1.disabled = true;
 pageButton2.disabled = false;
 pageButton3.disabled = false;
 pageButton4.disabled = false;

 pageButton1.className = "pagination-link is-current";
 pageButton2.className = "pagination-link";
 pageButton3.className = "pagination-link";
 pageButton4.className = "pagination-link";

 page1.className = "card";
 page2.className = "card hidden";
 page3.className = "hidden";
 page4.className = "hidden";
}

function selectPage2() {
 pageButton1.disabled = false;
 pageButton2.disabled = true;
 pageButton3.disabled = false;
 pageButton4.disabled = false;

 pageButton1.className = "pagination-link";
 pageButton2.className = "pagination-link is-current";
 pageButton3.className = "pagination-link";
 pageButton4.className = "pagination-link";

 page1.className = "card hidden";
 page2.className = "card";
 page3.className = "hidden";
 page4.className = "hidden";
}

function selectPage3() {
 pageButton1.disabled = false;
 pageButton2.disabled = false;
 pageButton3.disabled = true;
 pageButton4.disabled = false;

 pageButton1.className = "pagination-link";
 pageButton2.className = "pagination-link";
 pageButton3.className = "pagination-link is-current";
 pageButton4.className = "pagination-link";

 page1.className = "card hidden";
 page2.className = "card hidden";
 page3.className = "";
 page4.className = "hidden";
 loadData();
}

function selectPage4() {
 pageButton1.disabled = false;
 pageButton2.disabled = false;
 pageButton3.disabled = false;
 pageButton4.disabled = true;

 pageButton1.className = "pagination-link";
 pageButton2.className = "pagination-link";
 pageButton3.className = "pagination-link";
 pageButton4.className = "pagination-link is-current";

 page1.className = "card hidden";
 page2.className = "card hidden";
 page3.className = "hidden";
 page4.className = "";
 if (!loaded) {
  loadData2();
  loaded = true;
 }
}

// Oef 8
function loadData() {
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("page3").innerHTML = this.responseText;
  }
 };
 xhttp.open("GET", "tabel.html", true);
 xhttp.send();
}

// Oef 9
function loadData2() {
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
   data = this.responseText;
   data = data.split(";");

   for (i = 0; i < data.length; i++) {
    data[i] = data[i].split(",");
   }

   for (i = 0; i < data.length; i++) {
    label = document.createElement("p");
    label.innerText = data[i][0];
    progress = document.createElement("progress");
    progress.className = "progress is-primary";
    progress.value = data[i][1];
    progress.max = 100;
    page4.appendChild(label);
    page4.appendChild(progress);
   }
  }
 };
 xhttp.open("GET", "data.txt", true);
 xhttp.send();
}
