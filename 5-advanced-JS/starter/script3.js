
// Creating function constructor as a question template
var Question = function(q, answer, correct) {
	this.q = q;
	this.answer = answer;
	this.correct = correct;
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

// Creating a method to print the question & answers to console
Question.prototype.printQ = function() {
	// print the question
	console.log(this.q);
	
	// loop through answers
	for (var i = 0; i < this.answer.length; i++) {
		console.log(i + ': ' + this.answer[i] + '?');
	}
};

// Randomly select a question
function randomQuestion () {
	this.selected = Math.floor(Math.random() * 3);
	console.log(questions[this.selected].printQ());
	return this.selected;
}

// Display the random question & save which one
var savedQuestion = randomQuestion();

// prompt the user and store their response
var userAnswer = prompt('What\'s the correct answer?');

function checkAnswer (ans,correctArray) {
	if (ans == correctArray) {
		console.log('you won!');
	} else {
		console.log('you lost!');
	}
}

checkAnswer(userAnswer, questions[savedQuestion].correct);


// console.log(savedQuestion, questions[savedQuestion].correct);




