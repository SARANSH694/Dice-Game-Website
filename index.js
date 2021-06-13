var randomNumber1=(Math.floor(Math.random()*6))+1;
var imageSource1 ="Images/dice"+ randomNumber1 +".png";


var randomNumber2=(Math.floor(Math.random()*6))+1;
var imageSource2 ="Images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Its a draw";
}
