var activePlayer,dice;
activePlayer = 0;

document.querySelector('#diceImage').style.display = 'none'
document.querySelector('.btn-roll').addEventListener('click',function(){

document.querySelector('#diceImage').style.display = 'block'
dice = parseInt(Math.floor(Math.random()* 6)+1);
if(dice === 1){
var p = activePlayer
if(p===0){
p = 1
document.querySelector('#current-0').textContent = '0'
document.getElementById('pl1').classList.remove('active')
document.getElementById('pl2').classList.add('active') }
else if(p===1){
    p = 0
    document.querySelector('#current-1').textContent = '0'
    document.getElementById('pl2').classList.remove('active')
document.getElementById('pl1').classList.add('active')
}

activePlayer = p
 }
document.getElementById('diceImage').src  = 'dice-'+dice+'.png';
document.querySelector('#current-'+activePlayer).innerHTML  ='<em>'+ dice + '</em>';
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    console.log('active player is '+activePlayer);
var preScore = parseInt(document.querySelector('#score-'+activePlayer).textContent);
if(preScore+dice >= 20)
{   
     
     document.querySelector('#name-'+(activePlayer)).textContent = 'Winner !'
     document.querySelector('.dice').style.display = 'none'
     document.querySelector('#pl'+(activePlayer+1)).classList.add('winner')
     document.querySelector('#pl'+(activePlayer+1)).classList.remove('active')
         setTimeout(function(){
        newGame();
    },4000)
}   else
    document.querySelector('#score-'+activePlayer).innerHTML  ='<b>'+ (preScore+dice) +'</b>';

})
    document.querySelector('.btn-new').addEventListener('click',newGame)

    function newGame(){
    document.querySelector('#name-'+(activePlayer)).textContent = 'Player '+(activePlayer+1)
    //alert('New Game will be Started')
    document.querySelector('.player-current-score').textContent = 0
    document.querySelector('.player-score').textContent = 0
    document.querySelector('#current-1').textContent = 0
    document.querySelector('#score-1').textContent = 0
    document.querySelector('#diceImage').style.display = 'none'
}
