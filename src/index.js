import "@fortawesome/fontawesome-free/js/all";

// users
import Users from "./components/profils";
import AddUser from "./components/addUser";

// users information
const userName = document.getElementById("user-name");
const firstName = document.getElementById("first-name");
const accountNumber = document.getElementById("account-number");
const ibanInformation = document.getElementById("iban-information");
const banqueCodeInformation = document.getElementById("banque-code-information");
const branchCode = document.getElementById("branch-code");
const ribKey = document.getElementById("rib-key");

// complete information
const nomUser = document.getElementById("nom");
const prenomUser = document.getElementById("prenom");
const numeroDeCompte = document.getElementById("numero-compte");
const iban = document.getElementById("iban");
const codeBanque = document.getElementById("code-banque");
const codeGuichet = document.getElementById("code-guichet");
const cleRib = document.getElementById("clé-rib");
const btnValider = document.getElementById("btn-valider");


// let user = new AddUser(nomUser, prenomUser, numeroDeCompte, iban, codeBanque, codeGuichet, cleRib);

btnValider.addEventListener("click", ()=> {
  nomUser.textContent = userName.value;
  prenomUser.textContent = firstName.value;
  numeroDeCompte.textContent = accountNumber.value;
  iban.textContent = ibanInformation.value;
  codeBanque.textContent = banqueCodeInformation.value;
  codeGuichet.textContent = branchCode.value;
  cleRib.textContent = ribKey.value;
})

// let profil1 = new Users(156897895959, "FR15895612558", 25894, 20015, 56);

// numeroDeCompte.textContent = profil1.numeroDeCompte;
// iban.textContent = profil1.iban;
// codeBanque.textContent = profil1.codeBanque;
// codeGuichet.textContent = profil1.codeGuichet;
// cleRib.textContent = profil1.cleRib;


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
// let retirer = parseInt(inputRetirer.value);
// Le solde random:
// let solde = getRndInteger(-300, 1000000);
let solde = 0;

paragrapheSolde.textContent = solde;
// console.log(paraSolde);

//------- Events ----------
btnDeposer.addEventListener("click", () => {
  let resultat = parseInt(inputDeposer.value);
  solde += resultat;
  paragrapheSolde.textContent = solde;
  if (solde >= -300) {
    decouvertDepasser.classList.add("none");
  }
});

const retirerDeLArgent = () => {
  let valeur2 = parseInt(inputDeposer.value);
  let valeur1 = parseInt(inputRetirer.value);
  let newSold = (solde -= valeur1);
  paragrapheSolde.textContent = `${newSold}`;
  console.log(newSold);
  if (newSold < -300 ) {
    solde = -300;
    decouvertDepasser.classList.add("block");
    decouvertDepasser.style.color = "red";
    decouvertDepasser.textContent =
      " Vous ne pouvez pas dépasser le découvert autorisé !";
    paragrapheSolde.textContent = `${solde}`;
    console.log(solde, true);
  } else if (valeur2 > 0 && newSold <= -300) {
    decouvertDepasser.classList.add("block");
    decouvertDepasser.style.color = "red";
    decouvertDepasser.textContent =
      " Vous ne pouvez pas dépasser le découvert autorisé !";
    paragrapheSolde.textContent = `${solde}`;
  }
};

btnRetirer.addEventListener("click", retirerDeLArgent);
