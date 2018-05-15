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


// User Interface Logic
$(document).ready(function(){
  $('.roll-one').click(function(e){
    e.preventDefault();
    playerOne.dice = roll();
    $('#dice-one').text(playerOne.dice);
    $('#score-one').text(playerOne.score);
    playerOne.play();
    $(".roll-two").attr("disabled", "disabled");
    $(".hold-two").attr("disabled", "disabled");
  });
  $('.roll-two').click(function(e){
    playerTwo.dice = roll();
    $('#dice-two').text(playerTwo.dice);
    $('#score-two').text(playerTwo.score);
    playerTwo.play();
    $(".roll-one").attr("disabled");
    $(".hold-one").attr("disabled");
  });
  $('.hold-one').click(function(e){
    e.preventDefault();
    $(".hold-two").attr("disabled", "disabled");
    playerOne.hold();
    $('#total-score-one').text(playerOne.totalScore);
    playerOne.winnerCheck();
    $(".roll-two").removeAttr("disabled");
    $(".hold-two").removeAttr("disabled");
    $(".roll-one").attr("disabled", "disabled");
    $(".hold-one").attr("disabled", "disabled");
  });
  $('.hold-two').click(function(e){
    e.preventDefault();
    $(".hold-one").attr("disabled", "disabled");
    playerTwo.hold();
    $('#total-score-two').text(playerTwo.totalScore);
    playerTwo.winnerCheck();
    $(".roll-one").removeAttr("disabled");
    $(".hold-one").removeAttr("disabled");
    $(".roll-two").attr("disabled", "disabled");
    $(".hold-two").attr("disabled", "disabled");
  });
  $('.new-game').click(function(){
    $('#dice-one').text('');
    $('#score-one').text('');
    $('#dice-two').text('');
    $('#score-two').text('');
    $('#total-score-one').text('');
    $('#total-score-two').text('');
    $(".roll-one").removeAttr("disabled");
    $(".hold-one").removeAttr("disabled");
    $(".roll-two").removeAttr("disabled");
    $(".hold-two").removeAttr("disabled");
  });
});
