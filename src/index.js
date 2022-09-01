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

// console.log(inputRetirer);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + min));
}

// autorisation de découvert random:
let decouverte = getRndInteger(-600, 0);
autorisation.append(decouverte);

// Le solde random:
let solde = getRndInteger(-300, 10000);
monSolde.append(solde);

btnDeposer.addEventListener("click", () => {
  let valeur1 = parseInt(inputDeposer.value);
  let valeur2 = parseInt(solde);
  let result = valeur1 + valeur2;
  monSolde.textContent = result;
});

btnRetirer.addEventListener("click", () => {
    if(decouverte >= -600){
        let valeur1 = parseInt(inputRetirer.value);
        let valeur2 = parseInt(solde);
        let result = valeur2 - valeur1;
        monSolde.textContent = result;
    } else {
        
    }
});
