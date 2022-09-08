import "@fortawesome/fontawesome-free/js/all";

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
const paragrapheSolde = document.getElementById("solde");
const decouvertDepasser = document.getElementById("decouvert-depassé");

// random function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + min));
}

// autorisation de découvert:
let decouvert = 300;
autorisation.textContent = decouvert;

// Le solde random:
// let solde = getRndInteger(-300, 10000);
let solde = 0;

paragrapheSolde.textContent = solde;
// console.log(paraSolde);

// Events
btnDeposer.addEventListener("click", () => {
  let resultat = parseInt(inputDeposer.value);
  solde += resultat;
  paragrapheSolde.textContent = solde;
});

btnRetirer.addEventListener("click", () => {
  if ((solde == 0) & (inputRetirer.value <= 300) & (decouvert >= -300)) {
    let valeur1 = parseInt(inputRetirer.value);
    solde -= valeur1;
    // soldeDeDecouvert-= (valeur1 - decouvert);
    paragrapheSolde.textContent = solde;
    // autorisation.textContent = soldeDeDecouvert;
  } else {
    decouvertDepasser.classList.add("block");
    decouvertDepasser.textContent = " vous ne pouvez pas retirez !";
  }
});
