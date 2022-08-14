//JS-test
//1.Programming Basics
const arrNum = [];
function getNumberArr(arrayNum) {
  for (let i = 0; i < arrayNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //to see output it should be at the top
      arrNum.push("Jackpot!");
    } else if (i % 3 === 0) {
      arrNum.push("This is divisible by 3");
    } else if (i % 5 === 0) {
      arrNum.push("This is divisible by 5");
    } else {
      arrNum.push(i + 1);
    }
  }
  return arrNum;
}

const printArr = getNumberArr(100);
console.log(printArr);

//2.DOM
let images = ["img/who/1.jpg", "img/who/2.jpg", "img/who/3.jpg"];

function randomImg() {
  let randomImg = Math.floor(Math.random() * images.length);
  return images[randomImg];
}
const myButtom = document.createElement("Button");
document.body.appendChild(myButtom);
myButtom.innerHTML = "Display Image";
myButtom.addEventListener("click", randomImg);

//3.

const res = fetch(`https://reqres.in/api/users`);
res
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//4

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  logPrudoct() {}
}
