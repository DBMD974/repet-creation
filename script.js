// function creerCarte(lat, lon, zoom) {
//     // Créer une carte Leaflet avec des coordonnées initiales et un niveau de zoom
//     var maCarte = L.map('maCarte').setView([lat, lon], zoom);
  
//     // Ajouter une couche de tuiles de carte (par exemple, OpenStreetMap)
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© OpenStreetMap contributors'
//     }).addTo(maCarte);
  
//     // Ajouter un marqueur à la position donnée
//     L.marker([lat, lon]).addTo(maCarte);
  
//     // Ajouter d'autres éléments à la carte, tels que des polygones, des lignes, etc.
  
//     // Retourner la référence à la carte
//     return maCarte;
//   }
  


//   var maCarte = creerCarte(48.8566, 2.3522, 1
  

// alert('tropdelaballe');
// console.log

// document.write('<p> jkdsnhkjsqbkjvdnsnjfb');
// window.log









//Selecte l'element appelé ListeArticle
let ArticlesSection = document.getElementById("ListeArticle");

let Div = document.createElement('div'); //Créer un <div></div>
Div.className = "articles"; //Rajoute la classe du div avec "articles"
ArticlesSection.appendChild(Div);

let Image = document.createElement("img");
Image.className = "imgsize";
Image.src = "img/cbd_chien.jpg";
Image.alt = "chien qui prend cbd";

Div.appendChild(Image);
// a partir du dessous c'est moi qui le fait seule


let div2 = document.createElement('div');
div2.className = "bloctxt";
Div.appendChild(div2);
// éeme div.

// let h2 = document.createElement('titreimg')
// h2.className = "titreimg";

// div2.appendChild(h2)

let h2 = document.createElement('h2'); // 2eme ligne
h2.className = "titreimg";
h2.textContent = "Le CBD pour nos animaux.";

div2.appendChild(h2);


let h3 = document.createElement('h3'); // 3eme ligne."
h3.className = "cdt";
h3.textContent = "Categories: Animaux";

div2.appendChild(h3);

let txtimg = document.createElement('txtimg'); // 4eme ligne."
txtimg.className = "cdt";
txtimg.textContent = "CBD, or cannabidiol, has gained popularity as a potential treatment for various ailments in animals. CBD is a non- psychoactive.";

div2.appendChild(txtimg);


let a = document.createElement('a');
let button = document.createElement('button'); // 5eme ligne."
a.className = "a";
button.className = "button";
button.textContent = "lire l'article...";

div2.appendChild(a);
div2.appendChild(button);


let date = document.createElement('date'); // 6eme ligne."
date.className = "cdt";
date.textContent = "Date de poste: 01/01/23";

div2.appendChild(date);


// créer une fonction a partir de la...
// Fonction pour créer une carte
function createCard(title, category, description, imageUrl, imageAlt, date) {
  // Code de création de la carte
  // ...
  let ArticlesSection = document.getElementById("ListeArticle");

  let Div = document.createElement('div');
  Div.className = "articles";
  ArticlesSection.appendChild(Div);

  let Image = document.createElement("img");
  Image.className = "imgsize";
  Image.src = imageUrl;
  Image.alt = imageAlt;
  Div.appendChild(Image);

  let div2 = document.createElement('div');
  div2.className = "bloctxt";
  Div.appendChild(div2);

  let h2 = document.createElement('h2');
  h2.className = "titreimg";
  h2.textContent = title;
  div2.appendChild(h2);

  let h3 = document.createElement('h3');
  h3.className = "cdt";
  h3.textContent = "Categories: " + category;
  div2.appendChild(h3);

  let txtimg = document.createElement('txtimg');
  txtimg.className = "cdt";
  txtimg.textContent = description;
  div2.appendChild(txtimg);

  let a = document.createElement('a');
  let button = document.createElement('button');
  a.className = "a";
  button.className = "button";
  button.textContent = "lire l'article...";
  div2.appendChild(a);
  div2.appendChild(button);

  let dateElement = document.createElement('date');
  dateElement.className = "cdt";
  dateElement.textContent = "Date de poste: " + date;
  div2.appendChild(dateElement);

}

// Fonction pour créer trois cartes
function createThreeCards() {
  for (let i = 0; i < 3; i++) {
    createCard("Le CBD pour nos animaux.", "Animaux", "CBD, or cannabidiol, has gained popularity as a potential treatment for various ailments in animals. CBD is a non-psychoactive.", "img/cbd_chien.jpg", "chien qui prend cbd", "01/01/23");
  }
}

// Écouteur d'événement pour le clic sur le bouton
let createCardsButton = document.getElementById("createCardsButton");
createCardsButton.addEventListener("click", createThreeCards);





// essaie de boucle.
var sameme = '';

for( var i = 0; i < 9; i++) {
  sameme = sameme + i;
}

console.log(sameme);