var score = 0;

// Creating function constructor as a question template
var Question = function(q, answer, correct) {
	this.q = q;
	this.answer = answer;
	this.correct = correct;
}

// Creating a method to print the question & answers to console
Question.prototype.printQ = function() {
	// print the question
	console.log(this.q);
	
	// loop through answers
	for (var i = 0; i < this.answer.length; i++) {
		console.log(i + ': ' + this.answer[i] + '?');
	}
};

Question.prototype.checkAnswer = function (ans,correctArray) {
	if (ans == this.correct) {
		console.log('you won!');
		score++;
	} else {
		console.log('you lost!');
	}

	console.log('Your current score is: ' + score);
}

var q1 = new Question(
	// question
	'What\'s bitcoin\'s ticker?',

	// available answers
	['BTC', 'BCH', 'BIT'],

	// the correct answer in the array
	0);

var q2 = new Question(
	'What\'s etherem\'s ticker?',
	['ETC', 'ERM', 'ETH'],
	2);

var q3 = new Question(
	'What\'s grin\'s ticker?',
	['MW', 'GRIN', 'GRN'],
	1);

// Placing the questions into an array
var questions = [q1, q2, q3];

// var userAnswer = prompt('What\'s the correct answer?');

function newGame(input){
	if (input !== 'exit') {

		var n = Math.floor(Math.random() * 3);
		questions[n].printQ();
		var userAnswer = prompt('What\'s the correct answer?');
		questions[n].checkAnswer(userAnswer, questions[n].correct);
		newGame(userAnswer);
	} else {
		// do nothing
	}
}

newGame();


