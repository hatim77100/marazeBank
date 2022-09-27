
const dat = document.getElementById("date");

const date1 = new Date().getDate();
const date2 = new Date().getMonth();
const date3 = new Date().getFullYear();


// export default datex;

export const interval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  dat.textContent = `${date1}/${date2}/${date3} ${date.toLocaleTimeString()}`;
}

//  