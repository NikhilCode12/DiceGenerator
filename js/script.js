var randomDice1 = Math.floor(Math.random()*6)+1; //1-6
var randomDice2 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage1 = "dice" + randomDice1 + ".png";
var randomDiceImage2 = "dice" + randomDice2 + ".png";

var dice1 = document.querySelectorAll('img')[0];
dice1.setAttribute('src','./images/' + randomDiceImage1);

var dice2 = document.querySelectorAll('img')[1];
dice2.setAttribute('src','./images/' + randomDiceImage2);

var won = document.querySelector('h1');

if(randomDice1 === randomDice2){
    won.textContent = "Draw";
}
else if(randomDice1 < randomDice2){
    won.textContent = "⛳ Player 2 Wins";
}
else{
    won.textContent = "⛳ Player 1 Wins";
}