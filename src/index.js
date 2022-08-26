import '@fortawesome/fontawesome-free/js/all';
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

let btn1 = document.getElementById("btn1");
let inp1 = document.getElementById("inp1").value;
let span = document.querySelector('span');
console.log(inp1);
btn1.addEventListener("click", ()=> {
    span.innerHTML = inp1;
});