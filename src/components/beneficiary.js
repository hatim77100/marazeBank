
export const getElementById = (element) => {
   return( document.getElementById(element))
}
export const inputBeneficiary = getElementById("input-beneficiary");
export const spanBeneficiary = getElementById("span-beneficiary");
export const btnBeneficiary = getElementById("btn-beneficiary");
const divBeneficiary = getElementById("div-beneficiary");

export const addBeneficiaries = () => {
    divBeneficiary.classList.add("block");
    spanBeneficiary.textContent = inputBeneficiary.value;
}


// inputdeposit.addEventListener("keyup", (key) => {
//     console.log(key)
//     if (key.code === "Enter") {
//         alert("hola")
//     }
// });
