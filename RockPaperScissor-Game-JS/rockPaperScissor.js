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