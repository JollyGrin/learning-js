/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, lastDice;

// Initialize the game
init();


// Rolls dice on click
document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {

		var dice = [];

		// 1. Random Number
		dice[0] = Math.floor(Math.random() * 6) + 1;
		dice[1] = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var diceDOM = document.querySelector('.dice');
		var diceDOM2 = document.querySelector('.dice2');

		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice[0] + '.png';

		diceDOM2.style.display = 'block';
		diceDOM2.src = 'dice-' + dice[1] + '.png';

		// 3. if last dice was 6 and you roll a 6
		if (lastDice === 6 && dice === 6) {

			// player loses their score
			// scores[activePlayer] = 0;
			// document.querySelector('#score-' + activePlayer).textContent = 0;
			// nextPlayer();

		// 4. Update the round score if not 1
		} else if (dice[0] !== 1 && dice[1] !== 1) {

			// add score
			roundScore += (dice[0] + dice[1]);
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

		} else {

			// next player
			console.log(dice[0],dice[1]);
			nextPlayer();
		}

		// store the last dice roll
		lastDice = dice;
	}


});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add current score to global score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		

		// Set the input to value of .final-score box
		var input = document.querySelector('.final-score').value;
		var winningScore;

		// Form validation
		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}


		// Check if won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			// Skip to Next Player
			nextPlayer();
		};
	}

	



});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		sixTwice = 0;

		// zero the round score
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
};

// New game button
document.querySelector('.btn-new').addEventListener('click', init);


// Initialize the game
function init () {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	// Hide the Dice
	document.querySelector('.dice').style.display = 'none';

	// zero out numbers
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	// remove winner class
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	// remove active
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	// reset start
	document.querySelector('.player-0-panel').classList.add('active');
};