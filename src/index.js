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
const btnDeposer = document.getElementById("btn-deposer");
const inputDeposer = document.getElementById("deposer");
const btnRetirer = document.getElementById("btn-retirer");
const inputRetirer = document.getElementById("retirer");
const autorisation = document.getElementById("autorisation");
const monSolde = document.getElementById("solde");
const decouvertDepasser = document.getElementById("decouvert-depassé");

// console.log(decouvertDepasser);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + min));
}

// autorisation de découvert:
let decouvert = 300;
autorisation.append(decouvert);

// Le solde random:
// let solde = getRndInteger(-300, 10000);
let solde = 0;
monSolde.append(solde);

// Event
btnDeposer.addEventListener("click", () => {
  let valeur1 = parseInt(inputDeposer.value);
  let valeur2 = parseInt(solde);
  let result = valeur1 + valeur2;
  monSolde.textContent = result;
});

btnRetirer.addEventListener("click", () => {
  if (inputRetirer.value > decouvert & solde <= 0 ) {
    decouvertDepasser.textContent ="vous nous pouvez pas retirer de l'argent";
    console.log(inputRetirer.value);
  } else {
    let valeur1 = parseInt(inputRetirer.value);
    let valeur2 = parseInt(solde);
    let result = valeur2 - valeur1;
    monSolde.textContent = result;
  }
});
