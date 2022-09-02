import "@fortawesome/fontawesome-free/js/all";
// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png/opti.png';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//      // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//     return element;
//   }

//   document.body.appendChild(component());

// console.log("script ok");

// users
import Users from "./components/profils";

const numeroDeCompte = document.getElementById("numero-compte");
const iban = document.getElementById("iban");
const codeBanque = document.getElementById("code-banque");
const codeGuichet = document.getElementById("code-guichet");
const cleRib = document.getElementById("clé-rib");

let profil1 = new Users(156897895959, "FR15895612558", 25894, 20015, 56);

numeroDeCompte.textContent = profil1.numeroDeCompte;
iban.textContent = profil1.iban;
codeBanque.textContent = profil1.codeBanque;
codeGuichet.textContent = profil1.codeGuichet;
cleRib.textContent = profil1.cleRib;

// 

const btnDeposer = document.getElementById("btn-deposer");
const inputDeposer = document.getElementById("deposer");
const btnRetirer = document.getElementById("btn-retirer");
const inputRetirer = document.getElementById("retirer");
const autorisation = document.getElementById("autorisation");
const inputSolde = document.getElementById("solde");
const decouvertDepasser = document.getElementById("decouvert-depassé");

// console.log(decouvertDepasser);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + min));
}

// autorisation de découvert:
let decouvert = 300;
autorisation.textContent = decouvert;

// Le solde random:
// let solde = getRndInteger(-300, 10000);
let Solde = 0;

inputSolde.textContent = Solde;
console.log(inputSolde);

// Events
btnDeposer.addEventListener("click", (valeur1) => {
  let valeur1 = parseInt(inputDeposer.value);
  return Solde += valeur1;
  // let valeur2 = parseInt(inputSolde.value);
  // let result = valeur1 + valeur2;
  inputSolde.textContent = Solde;
});

btnRetirer.addEventListener("click", () => {
  // if (inputRetirer.value > decouvert & solde <= 0 ) {
  //   decouvertDepasser.textContent ="vous nous pouvez pas retirer de l'argent";
  //   console.log(inputRetirer.value);
  // } else {
    let valeur1 = parseInt(inputRetirer.value);
    let valeur2 = parseInt(inputSolde.value);
    let result = valeur2 - valeur1;
    inputSolde.textContent = result;
  // }
});


// exercice
let sold = 0
const add = (value) => {
  return sold += value;
}

console.log(add());
console.log(sold);

console.log(add());
console.log(sold);