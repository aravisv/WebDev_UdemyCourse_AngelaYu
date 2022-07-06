var player1;
var player2;
var firstDiceImageString; 
var secondDiceImageString;
console.log(player1);
console.log(player2);

//document.querySelector("button").onclick = rollDice();

function rollDice()
{   
    document.querySelectorAll("div")[1].innerHTML = '<input type="button" onclick="rollDice()" value="Click me"></input>';
    firstDiceImageString = "images/dice";
    secondDiceImageString = "images/dice";
    player1 = Math.floor((Math.random()*6))+1;
    player2 = Math.floor((Math.random()*6))+1;
    firstDiceImageString = firstDiceImageString + player1 + ".png"
    secondDiceImageString = secondDiceImageString + player2 + ".png"
    document.querySelectorAll(".dice img")[0].src = firstDiceImageString;
    document.querySelectorAll(".dice img")[1].src = secondDiceImageString;
    if(player1>player2){
        document.querySelectorAll("div")[1].innerHTML+= "<p> Player 1 won </p>";
    } else if(player1<player2){
        document.querySelectorAll("div")[1].innerHTML+= "<p> Player 2 won </p>";
    } else{
        document.querySelectorAll("div")[1].innerHTML+= "<p> Draw </p>";
    }
    
}