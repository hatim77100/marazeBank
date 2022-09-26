// const inputDeposer = document.getElementById("deposer");
// const btnRetirer = document.getElementById("btn-retirer");
// const paragrapheSolde = document.getElementById("solde");
// const decouvertDepasser = document.getElementById("decouvert-depassé");
// const inputRetirer = document.getElementById("retirer");


// let solde = 0;
// let decouvert = -300;
// export const retirerDeLArgent = () => {
//     let valeur2 = parseInt(inputDeposer.value);
//     let valeur1 = parseInt(inputRetirer.value);
//     let newSold = (solde -= valeur1);
//     paragrapheSolde.textContent = `${newSold}`;
//     if (newSold < decouvert ) {
//       solde = decouvert;
//       console.log(solde);
//       decouvertDepasser.classList.add("block");
//       decouvertDepasser.style.color = "red";
//       decouvertDepasser.textContent =
//         " Vous ne pouvez pas dépasser le découvert autorisé ! ";
//       paragrapheSolde.textContent = `${solde}`;
//       // console.log(solde, true);
//     } else if (valeur2 > 0 && newSold <= -300) {
//       decouvertDepasser.classList.add("block");
//       decouvertDepasser.style.color = "red";
//       decouvertDepasser.textContent =
//         " Vous ne pouvez pas dépasser le découvert autorisé !";
//       paragrapheSolde.textContent = `${newSold}`;
//     }
//   };
  