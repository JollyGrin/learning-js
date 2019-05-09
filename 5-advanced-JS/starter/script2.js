// var years = [1990, 1965, 1937, 2005];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]));
// 		console.log('Just added ' + arrRes[i] + ' to the array');
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2016 - el;
// }

// function canBuyAlc(el) {
// 	return el >= 21;
// }

// var ages = arrayCalc(years, calculateAge);
// var legal = arrayCalc(ages, canBuyAlc);


// console.log(years);
// console.log(ages);
// console.log(legal);

// function loopType(type) {
// 	if (type == '.ogg') {
// 		return function(name) {
// 			console.log('Sorry ' + name + ' but .ogg files are not supported');
// 		} 
// 	} else {
// 		return function(name) {
// 			console.log('Congrats ' + name + ', your file is uploaded');
// 		}
// 	}
// }

// var deanOgg = loopType('.ong')('Dean');
// console.log(deanOgg);



// function retirement(retirementAge) {
	
// 	var a = ' years left until retirement.';

// 	return function(yearOfBirth) {
// 		var age = 2016 - yearOfBirth;
// 		console.log((retirementAge - age) + a);
// 	}
// }

// var retireUS = retirement(66);
// retireUS(1990);


// Interview questions as a closure

function interviewQuestion(job) {

	// text in message
	var a = ' test';

	return function(name) {

		if (job === 'designer') {
			console.log('What do you design ' + name + '?' + a);
		} else if (job === 'teacher') {
			console.log('What do you teach ' + name + '?' + a);
		} else {
			console.log('What do you do ' + name + '?' + a);
		}
	}
}

interviewQuestion('teacher')('Dean');





















