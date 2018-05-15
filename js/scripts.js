// // Business Logci

function roll(){
	return Math.floor(Math.random() * 6) + 1;
}

function Game(){
	this.score = 0;
  this.totalScore = 0;
  this.dice = 0;
}

Game.prototype.play = function(){
	if (this.dice === 1){
  	this.score = 0;
    console.log(this.score + ' rolled a one');
  } else{
  	this.score += this.dice;
    console.log(this.score + ' another number');
  }
}

Game.prototype.hold = function(){
	this.totalScore += this.score;
  this.score = 0;
}

Game.prototype.winnerCheck = function(){
	if (this.totalScore >= 100){
  	alert('Game over! Winner is: ')
  }
}

var playerOne = new Game('Player One');
var playerTwo = new Game('Player Two');
