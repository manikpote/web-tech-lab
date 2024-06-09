let text = "asdfghjkl";
// document.getElementById("submit").innerHTML = text.length;
// document.getElementById("submit").innerHTML = text.charAt(1);
// document.getElementById("submit").innerHTML = text.charCodeAt(1);
// document.getElementById("submit").innerHTML = text.at(1);
// document.getElementById("submit").innerHTML = text[4];
// document.getElementById("submit").innerHTML = text.slice(-6);
// document.getElementById("submit").innerHTML = text.substring(2);
// document.getElementById("submit").innerHTML = text.substr(2, 5);

document.getElementById("submit").innerHTML = text.concat("rijan");

// function add() {
//   let a = 2;
//   let b = 3;

//   c = a + b;
//   console.log(c);
//   alert("this is " + c);
// }

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.length;

document.getElementById("demo").innerHTML = fruits.toString();

document.getElementById("demo").innerHTML = fruits.at(2);
document.getElementById("demo").innerHTML = fruits[3];
