// var jG1, jG2, jG3, mG1, mG2, mG3, yG1, yG2, yG3;
// jG1 = 89;
// jG2 = 120;
// jG3 = 103;
// mG1 = 116;
// mG2 = 97;
// mG3 = 123;
// yG1 = 197;
// yG2 = 134;
// yG3 = 105;

// var avgJohn = (jG1 + jG2 + jG3) / 3;
// var avgMike = (mG1 + mG2 + mG3) / 3;
// var avgMary = (yG1 + yG2 + yG3) / 3;
// var avg = (avgJohn + avgMike + avgMary) / 3;

// console.log('John\'s average score is ' + avgJohn);
// console.log('Mike\'s average score is ' + avgMike);
// console.log('Mary\'s average score is ' + avgMary);

// if (avgJohn > avgMike && avgJohn > avgMary) {
// 	console.log('John has the highest average score of ' + avgJohn);
// } else if (avgMike > avgJohn && avgMike > avgMary) {
// 	console.log('Mike has the highest average score of ' + avgMike);
// } else if (avgMary > avgJohn && avgMary > avgMike) {
// 	console.log('Mary has the highest average score of ' + avgMary);
// } else {
// 	console.log('There was a tie!');
// };


// function calculateAge(birthYear) {
// 	return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);


// function yearsUntilRetirement(year, firstName) {

// 	var age = calculateAge(year);
// 	var retirement = 65 - age;

// 	if(retirement > 0) {
// 		console.log(firstName + ' retires in ' + retirement + ' years.');
// 	} else {
// 		console.log (firstName + ' is already retired.');
// 	}

	

// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');


// var whatDoYouDo = function(job, firstName) {
// 	switch(job) {
// 		case 'teacher':
// 			return  firstName + ' teaches kids how to code';
// 		case 'driver':
// 			return firstName + ' drives a cab in Lisbon.';
// 		case 'designer':
// 			return firstName + ' designs websites.';
// 		default:
// 			return firstName + ' does something else.';
// 	}
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'John'));
// console.log(whatDoYouDo('retired', 'John'));

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// names[names.length] = 'Mary';

// console.log(names);


// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')

// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

// console.log(isDesigner);

// var bill = [124,48,268];
// var tips = [];
// var total = [];

// var tip = function calcTip(paid) {
// 	if (paid < 50) {
// 		tips.push(paid * .2);
// 		total.push(paid + (paid * .2));
// 	} else if (paid >= 50 && paid <= 200) {
// 		tips.push(paid * .15);
// 		total.push(paid + (paid * .15));
// 	} else {
// 		tips.push(paid * .1);
// 		total.push(paid + (paid * .1));
// 	}
// }

// tip(bill[0]);
// tip(bill[1]);
// tip(bill[2]);


// console.log(tips);
// console.log(total);

// function tipCalc(bill) {
// 	var percentage;

// 	if (bill < 50) {
// 		percentage = .2;
// 	} else if (bill >= 50 && bill < 200) {
// 		percentage = .15;
// 	} else {
// 		percentage = .1;
// 	}

// 	return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalc(bills[0]), 
// 			tipCalc(bills[1]),
// 			tipCalc(bills[2])];
// var final = [bills[0] + tips[0],
// 			 bills[1] + tips[1],
// 			 bills[2] + tips[2]];

// console.log(tips, final);


// var mark = {
// 	name: 'Mark',
// 	mass: 1,
// 	height: 1.69,
// 	calcBMI: function(){
// 		this.bmi = this.mass / (this.height * this.height);
// 	}
// }

// var john = {
// 	name: 'John',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function(){
// 		this.bmi = this.mass / (this.height * this.height);
// 	}
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (john.bmi > mark.bmi) {
// 	console.log(john.name + ' has the highest bmi of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
// 	console.log(mark.name + ' has the highest bmi of ' + mark.bmi);
// } else {
// 	console.log('It\'s a tie!');
// }


var john = {
	name: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	tipCalc: function() {
		this.tips = [];
		this.final = [];

		for(var i = 0; i < this.bills.length; i++) {

			var percentage;
			var bill = this.bills[i];
			
			if (bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill > 200) {
				percentage = .15;
			} else {
				percentage = .1;
			}

			
			this.tips[i] = bill * percentage;
			this.final[i] = bill + bill * percentage;
		}
		
	}
};

var mark = {
	name: 'Mark Swan',
	bills: [77, 375, 110, 45],
	tipCalc: function() {
		this.tips = [];
		this.final = [];

		for(var i = 0; i < this.bills.length; i++) {

			var percentage;
			var bill = this.bills[i];
			
			if (bill < 100) {
				percentage = .2;
			} else if (bill >= 100 && bill > 300) {
				percentage = .15;
			} else {
				percentage = .25;
			}

			
			this.tips[i] = bill * percentage;
			this.final[i] = bill + bill * percentage;
		}
		
	}
};

function avgTip(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}

	return sum / tips.length
};

john.tipCalc();
mark.tipCalc();
console.log(john, mark);


john.avg = avgTip(john.tips);
mark.avg = avgTip(mark.tips);

console.log(john.avg, mark.avg)


if (john.avg > mark.avg) {
	console.log(john.name + ' has the highest score!')
} else if (mark.avg > john.avg) {
	console.log(mark.name + ' has the highest score!')
} else {
	console.log('There was a tie!');
}