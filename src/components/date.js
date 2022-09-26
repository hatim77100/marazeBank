
const dat = document.getElementById("date");

const date1 = new Date().getDate();
const date2 = new Date().getMonth();
const date3 = new Date().getFullYear();
const date4 = new Date().getHours();
const date5 = new Date().getMinutes();

const datex = () => {
    dat.textContent = `${date1}/${date2}/${date3} ${date4}:${date5}`;
}

export default datex;