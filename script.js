var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your bill?"));
var num2 = (num1*0.07)+num1;
var num3 = num2*0.05;
var total = num2+num3;
containerEle.innerHTML = "Your final bill is $"+total+"."
