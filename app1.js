var score,roundScore,activePlayer,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){

    //the roll button must work only when game is playing
    if(gamePlaying){
   // 1.to add a random number on the dice
   var dice=Math.floor(Math.random()*6)+1;
  
   //2.to display the result

   var diceDom= document.querySelector('.dice');
  diceDom.style.display='block';
  diceDom.src='dice-'+ dice+'.png';
  //3.to show the result if the number is not eequal to 1
  if(dice!=1){
      roundScore=roundScore+dice;
      document.querySelector('#current-'+activePlayer).textContent=roundScore;
  }
  else{ 
     nextPlayer();
  }
}
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
//add current score to the global score
score[activePlayer]=score[activePlayer]+roundScore;


//update user interface(UI)
document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];


//to check if the player win the game or not
if(score[activePlayer]>=20)
{
    document.querySelector('#name-'+activePlayer).textContent='WINNER'; 
    document.querySelector('.dice').style.display='none';
    document.querySelector('.Player-'+activePlayer+'-panel').classList.add('winner'); 
    document.querySelector('.Player-'+activePlayer+'-panel').classList.remove('active');
     gamePlaying=false;
}
else{
nextPlayer();}
    }
});

function nextPlayer(){
    activePlayer===0? activePlayer=1:activePlayer=0;
      roundScore=0;

      document.getElementById('current-0').textContent=0;
      document.getElementById('current-1').textContent=0;
      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init)


// the init function is to initlize the new game
function init(){
    score=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;

//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice +'</em>';
document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-0').textContent='player 1';
document.querySelector('#name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove  ('winner'); 
document.querySelector('.player-1-panel').classList.remove('winner'); 
document.querySelector('.player-0-panel').classList.remove('active'); 
document.querySelector('.player-1-panel').classList.remove('active'); 
document.querySelector('.player-0-panel').classList.add('active'); 

}