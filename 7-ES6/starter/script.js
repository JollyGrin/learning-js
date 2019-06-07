// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
// 	return 2016 - el;
// });

// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2016 - el);

// console.log(ages6);

// ages6 = years.map((el,index) => `Age element ${index + 1}: ${2016 - el}.`);

// console.log(ages6);

// ages6 = years.map((el,index) => {
// 	const now = new Date().getFullYear();
// 	const age = now - el;
// 	return `Age element ${index + 1}: ${age}.`;
// });

// console.log(ages6);


// ES5

// var box5 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function() {
// 		var self = this;

// 		document.querySelector('.green').addEventListener('click', function(){
// 			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
// 			alert(str);
// 		});
// 	}

// };

// // box5.clickMe();


// // ES6
// const box6 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function() {

// 		document.querySelector('.green').addEventListener('click', () => {
			
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}

// };

// box6.clickMe();





// const box66 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: () => {

// 		document.querySelector('.green').addEventListener('click', () => {
			
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}

// };

// box66.clickMe();

// function Person(name) {
// 	this.name = name;
// };

// // ES5
// // Person.prototype.myFriends5 = function(friends) {

// // 	var arr = friends.map(function(el) {

// // 		return this.name + ' is friends with ' + el;
// // 	}.bind(this));

// // 	console.log(arr);
// // };

// // var friends = ['Bob', 'Jane', 'Mark'];

// // new Person('John').myFriends5(friends);


// // ES6
// Person.prototype.myFriends6 = function(friends) {

// 	var arr = friends.map(el =>

// 		`${this.name} is friends with ${el}`);

// 	console.log(arr);
// };

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('Mike').myFriends6(friends);


// ES5

// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6

// const [name, age] = ['John', 26];

// console.log(name, age);


// const obj = {
// 	firstName: 'John',
// 	lastName: 'Smith'
// };

// const {firstName, lastName} = obj;

// console.log(firstName, lastName);


// function calcAgeRetirement(year) {
// 	const age = new Date().getFullYear() - year;
// 	return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age, retirement);




// Array.from(boxes).forEach(cur => {
// 	cur.style.backgroundColor = 'dodgerblue'
// });


// // ES6
// const boxes = document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for (const cur of boxesArr6) {

// 	if (cur.className.includes('blue')) {
// 		continue;
// 	}

// 	cur.textContent = 'I changed to blue!';

// };

// // ES5

// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
// 	return cur >= 18;
// });

// console.log(full);

// console.log(ages[full.indexOf(true)]);



// // ES6

// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));

// function addFourAges (a, b, c, d) {
// 	return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);

// console.log(sum1);

// //  ES5

// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Marry', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, ...familyMiller];

// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];


// Array.from(all).forEach(cur => cur.style.color = 'purple');

// console.log(all);


//////////////////////////////////////////
//  Rest Parameters


/*
// ES5

function isFullAge5() {
	// console.log(arguments);

	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= 18);
	})
};

// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6

function isFullAge6(...years) {
	years.forEach(cur => console.log((2016 - cur) >= 18));
};

isFullAge6(1990, 1999, 1965, 2016);

*/

// ES5

// function isFullAge5(limit) {
// 	var argsArr = Array.prototype.slice.call(arguments, 1);

// 	argsArr.forEach(function(cur) {
// 		console.log((2016 - cur) >= limit);
// 	})
// };

// // isFullAge5(16, 1990, 1999, 1965, 2016, 1987);

// // ES6

// function isFullAge6(limit, ...years) {
// 	years.forEach(cur => console.log((2016 - cur) >= limit));
// };

// isFullAge6(16, 1990, 1999, 1965, 2016, 1987);





//////////////////////////
//  Default Parameters


// // ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

// 	// setting default last name of Smith
// 	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
// 	nationality === undefined ? nationality = 'american' : nationality = nationality;


// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality
// }


// // ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;

// }


// var john = new SmithPerson('John', 1990);

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');



// //////////////////////////
// //  MAPS

// const question = new Map();
// question.set('question', 'What is the official name of the latest major Javascript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct Answer');
// question.set(false, 'Wrong, please try again');


// // console.log(question.get('question'));
// // console.log(question.size);


// // if(question.has(4)) {
// // 	// question.delete(4);
// // 	// console.log('hey');
// // };

// // question.clear();

// // question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}.`));


// // for (let [key, value] of question.entries()) {
	
// // 	if (typeof(key) === 'number') {
// // 		console.log(`Answer ${key}: ${value}`);
// // 	}

// // }

// // const ans = parseInt(prompt('Write the correct answer'));

// // console.log(question.get(ans === question.get('correct')));



// ////////////////////////////
// //  Classes

// // ES5
// var Person5 = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };

// Person5.prototype.calculateAge = function() {
// 	var curYear = new Date().getFullYear();
// 	var age = curYear - this.yearOfBirth;
// 	console.log(age);
// };

// var john5 = new Person5('John', 1990, 'teacher');


// // john5.calculateAge;


// // console.log(john5);


// // ES6

// // class Person6 {
// // 	constructor (name, yearOfBirth, job) {
// // 		this.name = name;
// // 		this.yearOfBirth = yearOfBirth;
// // 		this.job = job;
// // 	}

// // 	calculateAge() {
// // 		var curYear = new Date().getFullYear();
// // 		var age = curYear - this.yearOfBirth;
// // 		console.log(age);
// // 	}

// // 	// static class
// // 	static greeting() {
// // 		console.log('Hey there!');
// // 	}
// // }

// // const john6 = new Person6('John', 1990, 'teacher');

// // Person6.greeting();



// ///////////////////////////////////


// // ES5
// var Person5 = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };

// Person5.prototype.calculateAge = function() {
// 	var curYear = new Date().getFullYear();
// 	var age = curYear - this.yearOfBirth;
// 	console.log(age);
// };

// var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {

// 	Person5.call(this, name, yearOfBirth, job);
// 	this.olympicGames = olympicGames;
// 	this.medals = medals;
// }


// // ES6

// class Person6 {
// 	constructor (name, yearOfBirth, job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge() {
// 		var curYear = new Date().getFullYear();
// 		var age = curYear - this.yearOfBirth;
// 		console.log(age);
// 	}

// 	// static class
// 	static greeting() {
// 		console.log('Hey there!');
// 	}
// }

// class Athlete6 extends Person6 {
// 	constructor (name, yearOfBirth, job, olympicGames, medals) {
// 		super(name, yearOfBirth, job);
// 		this.olympicGames = olympicGames;
// 		this.medals = medals;
// 	}

// 	wonMedal() {
// 		this.medals++;
// 		console.log(this.medals);
// 	}
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);





/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/



class Element {
	constructor (name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
};

class Park extends Element {
	constructor(name, buildYear, trees, area) {
		super(name, buildYear);
		this.trees = trees;
		this.area = area;
	}

	treeDensity() {
		const density = parseInt(this.trees / this.area);
		console.log(`${this.name} has a tree density of ${density} trees/km`);
	}
};

class Street extends Element {
	constructor (name, buildYear, km, size = 'normal') {
		super(name, buildYear);
		this.km = km;
		this.size = size;
	}

	classificationSize() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'large');
		console.log(`${this.name}, is classified as ${this.size}`);
	}
};

const allParks = [
	new Park ('Green Park', 75, 900, 0.8),
	new Park ('Red Park', 72, 950, 1.05),
	new Park ('Blue Park', 68, 1005, 0.9),
	new Park ('Black Park', 68, 1002, 0.9)
	];

const allStreets = [
	new Street ('Up St', 80, 7, 'small'),
	new Street ('Down St', 78, 7.3, 'tiny'),
	new Street ('Left St', 82, 10, 'large'),
	];


function reportParks (p) {

	console.log('----- Parks Report -----');

	// report tree density of each park
	console.log('## 1: Tree Density of each Park #');
	p.forEach(cur => {
		cur.treeDensity();
	});

	// BREAK
	console.log('\n');

	// avg age of all parks
	console.log('## 2: Avg Age of all Parks ##')
	let sum = 0;

	p.forEach(function(cur, i) {
		// add all ages to sum then divide by p array length
		sum += p[i].buildYear;
	});

	let avgAge = sum / p.length;

	console.log(`The average age of all parks is ${avgAge}`);

	// BREAK
	console.log('\n');

	// name of park with >1000 trees
	console.log('## 3: Park with >1000 trees ##')

	for (const cur of allParks) {
		if (cur.trees > 1000) {
			console.log(`${cur.name} has ${cur.trees} trees.`);
		}
	};

	// BREAK
	console.log('\n');


};

function reportStreets (s) {

	console.log('----- Streets Report -----');

	// total & avg length of all streets
	console.log('## 4: Total & AVG length of all streets ##');
	let sum = 0;

	s.forEach((cur, i) => {
		sum += s[i].km;
	});

	let kmAvg = parseInt(sum / s.length);

	console.log(`This town has ${s.length} streets, which total ${sum} kilometers with an average length of ${kmAvg} km.`);

	
	// BREAK
	console.log('\n');

	// size of each street
	console.log('## 5: Size classification of each street ##')

	s.forEach((cur, i) =>{
		s[i].classificationSize();
	});

};

reportParks(allParks);
reportStreets(allStreets);

















