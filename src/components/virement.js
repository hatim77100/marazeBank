export const inputVirement = document.getElementById("input-virement");
export const paraVirementUn = document.getElementById("para-virement-un")
export const btnBeneficiaryConfirmed = document.getElementById(
  "btn-beneficiary-confirmed"
);
export const spanVirement = document.getElementById("span-virement");
export const paraVirement = document.getElementById("para-virement");
export const beneficiary = document.getElementById("beneficiary");

const text = () => {
  paraVirement.classList.add("block");
  paraVirement.textContent = "Vous devez choisir un bébéficiare";
};

const hiddenText = () => {
  paraVirement.classList.add("none");
};

btnBeneficiaryConfirmed.addEventListener("click", () => {
  let inputValue = parseInt(inputVirement.value);
  
  if (inputVirement.value === "") {
    text();
    setTimeout(hiddenText, 2000);
  } else {
    paraVirementUn.classList.add("block");
    spanVirement.textContent = inputVirement.value;
  }
});
