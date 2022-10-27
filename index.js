

// var randomNumber1 = MATH.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = MATH.floor(n) + 1 ;
//
// console.log (randomNumber1);

//RANDOM NUMBER 1 FOR DICE 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//RANDOM NUMBER 2 FOR DICE 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 Wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Darw!";
}
