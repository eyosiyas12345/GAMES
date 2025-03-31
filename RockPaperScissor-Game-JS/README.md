# Rock Paper Scissor Game

This is my first game by javascript pushed on Feb12,2025.

## Game out look

![rps game](https://github.com/user-attachments/assets/b7ebd83e-2ae4-4a5b-a6f0-c36a4b4b56a0)

### HTML

```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta  name="Author" content="Eyosiyas Gezahegn">
  <link rel="stylesheet" href="rockPaperScissor.css">
  <script src="rockPaperScissor.js" defer> </script>
  <title>Rock Paper Scissor Game</title>
  </head>

  <body>
    <div class="container">
      <!-- upper sub-container-->
      <div>
    <p class="game-title">Rock Paper Scissors</p>
    
    <button onclick="playGame('Rock');" class="emoji-button"><img src="images/Rock-emoji.png" alt="" class="emoji"></button>

    <button onclick="playGame('Paper')"class="emoji-button"><img src="images/Paper-emoji.png" alt="" class="emoji"></button>

    <button onclick="playGame('Scissor')"class="emoji-button"><img src="images/Scissor-emoji.png" alt="" class="emoji"></button>
      </div>
<!--end of upper-->

<!--lower sub-container-->
<div>
    <p class="js-result result"></p>
    <p class="js-moves moves">
    </p>
    <p class="js-score"></p>
  <button onclick="reset_score()" class="reset-button">Reset Score</button>
  <button class="auto-button js-auto-button" onclick="autoplay()">Auto Play</button>
</div>

</div>
  </body>
</html>

```

### CSS

```css
body{
 background-color:rgb(25,25,25);
 color:white;
 font-family:Arial;
 margin-bottom:1000px;
}
.container{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
}
.game-title{
  font-size:30px;
  font-weight:bold;
}
.emoji{
  height:50px;
  background-color:transparent;
}
.emoji-button{
  background-color:transparent;
  border: 3px solid white;
  border-radius:50%;
  padding:30px 30px;
  margin-left: 10px;
  cursor:pointer;
}
.result{
  margin-top:50px;
  font-size:22px;
  font-weight:bold;
  margin-bottom:50px;
  text-align: center;
}
.moves{
  margin-bottom:50px;
}
.reset-button,
.auto-button{
  padding: 10px 20px;
  border-radius:none;
  font-size:15px;
  cursor:pointer;
}
```


###Javascript

```javascript
let score =JSON.parse(localStorage.getItem('score'))||{
  Tie:0,  
  'You Win':0,
  'You Lose':0
};
updateScore();

function playGame(playerMove){
const computerMove = selectComputerMove();
  let result='';
   
  if(playerMove==='Rock'){
    if(computerMove==='Rock'){
      result='Tie';
      }
    else if(computerMove==='Paper'){
      result='You Lose';
    }
    else {
      result='You Win';
    }
  }
  else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
      result='You Win';
    }
    else if(computerMove==='Paper'){
      result='Tie';
    }
    else {
      result='You Lose';
    }
}
else{
    if(computerMove==='Rock'){
      result='You Lose';
    }
    else if(computerMove==='Paper'){
      result='You Win';
    }
    else {
      result='Tie';
    }
}
document.querySelector('.js-result').innerHTML=result;


if(result==='Tie'){
  score.Tie++;
}
else if(result==='You Win'){
  score['You Win']++;
}
else{
  score['You Lose']++;
}

// if(score['You Win']===5){
//   alert('You Win the Game');
//   reset_score();
// }
// else if(score['You Lose']===5){
//   alert('You Lose the Game');
//   reset_score();
// }
displayMoves(playerMove,computerMove);
updateScore();

localStorage.setItem('score',JSON.stringify(score));

}


function selectComputerMove(){
  const randomnum= Math.random();
let computerMove ='';
if(randomnum>=0 && randomnum<1/3){
   computerMove='Rock';
}
  else if(randomnum>=1/3 && randomnum<2/3){
    computerMove='Paper';
  }
    else{
      computerMove='Scissor';
    }
return computerMove;
}
function reset_score(){
  score.Tie=0;
  score["You Lose"]=0;
  score["You Win"]=0;
  localStorage.removeItem('score');
  updateScore();
}


function updateScore(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score['You Win']}, Losses: ${score['You Lose']}, Ties:${score.Tie}`;

}
function displayMoves(playerMove,computerMove){
  
document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" alt ="" class="emoji"><img src="images/${computerMove}-emoji.png" alt="" class="emoji"> Computer`;
}
let isautoPlaying=false;
let intervalId=0;
autoBtn= document.querySelector('.js-auto-button')

function autoplay(){

  if(isautoPlaying){
    autoBtn.innerHTML='Auto Play';
clearInterval(intervalId);
console.log('here');
isautoPlaying=false;
  }
  else{
    autoBtn.innerHTML='Stop Playing';
    intervalId = setInterval(function() {
      let playerMove=selectComputerMove();
      playGame(playerMove);
    },1000);
    isautoPlaying=true;
  }
}
```

## Deployed game link

Coming soon 🙄 working on it.....

## Guidance to play

1, press Autoplay to see how the game is played
2, the player task is only to click one of the three options rock , paper or scissor
3, the computer automaticly pick its choice also from the three
4, if it maches: number of ties increase.
   if you are rock  vs computer is paper : number of losses increase
   if you are paper vs computer is rock : number of wins increase.
   continue at this staff....
5, At the time when the number of loses or wins reach 5 the player will lose or win respectively
 
