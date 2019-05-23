// BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	Expense.prototype.calcPercentage = function(totalIncome){

		if(totalIncome > 0) {
			this.percentage = Math.round((this.value / totalIncome) * 100);
		} else {
			this.percentage = -1;
		}		

	};

	Expense.prototype.getPercentage = function () {
		return this.percentage;
	}

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var caculateTotal = function(type) {

		var sum = 0;

		data.allItems[type].forEach(function(cur) {
			sum += cur.value;
		});

		data.totals[type] = sum;

	};


	var data = {

		allItems: {
			exp: [],
			inc: []
		},

		totals: {
			exp: 0,
			inc: 0
		},

		budget: 0,

		percentage: -1
	};

	return {
		
		addItem: function(type, des, val) {
			var newItem, ID;

			
			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			};
			

			// Create new item based on 'inc' or 'exp' type
			if (type === 'exp') {
			newItem = new Expense (ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income (ID, des, val);
			};

			// Push it into our data structure
			data.allItems[type].push(newItem);
			
			// Return item
			return newItem;
		},

		deleteItem: function(type, id) {
			var index, ids;
			// ids = [1 2 4 6 8]

			ids = data.allItems[type].map(function(current){
				return current.id;
			});

			index = ids.indexOf(id);

			if (index !== -1) {
				data.allItems[type].splice(index, 1);
			}

		},

		calculateBudget: function() {

			// calculate total income & expenses
			caculateTotal('exp');
			caculateTotal('inc');

			// calculate the budget: income - expenses
			data.budget = data.totals.inc - data.totals.exp;

			// calculate the percentage of income that we spent
			if(data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;
			}


			
		},

		calculatePercentages: function() {
			data.allItems.exp.forEach(function(cur){
				cur.calcPercentage(data.totals.inc);
			});
		},

		getPercentages: function() {
			var allPerc = data.allItems.exp.map(function(cur){
				return cur.getPercentage();
			});
			return allPerc;
		},

		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			}
		},

		// exposes datastructure in console, delete before production
		testing: function() {
			console.log(data);
		}

	};

})();


// UI CONTROLLER
var UIController = (function() {

	// Select the DOM input fields of +/-, description, value, & button
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expenseContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expenseLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container'
	};

	return {

		getInput: function() {

			return {

				type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)

			};
		},

		addListItem: function(obj, type) {
			var html, newHtml, element;

			// Create HTML String with placeholder text

			if (type === 'inc') {
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expenseContainer;

				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}


			// Replace placeholder text with actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);

			// Insert the HTML into the DOM

			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



		},

		deleteListItem: function(selectorID) {
			var element = document.getElementById(selectorID);

			element.parentNode.removeChild(element);
		},

		clearFields: function() {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, index, array) {
				current.value = "";
			});

			// Selects the description box
			fieldsArr[0].focus();

		},

		displayBudget: function(obj){

			document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
			document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
			document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
			document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

			if(obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},

		getDOMstrings: function() {
			return DOMstrings;
		}

	};

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {

		// Get the DOM strings from UI controller
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);


		document.addEventListener('keypress', function(event) {

			// if enter (13) was used
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});

		document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);

	};



	var updateBudget = function() {

		// 1. Calculate the budget
		budgetCtrl.calculateBudget();

		// 2. Return the budget
		var budget = budgetCtrl.getBudget();
		// console.log(budget);

		// 3. Display the budget on the UI
		UICtrl.displayBudget(budget);

	};

	var updatePercentages = function() {

		// 1. Calculate percentages
		budgetCtrl.calculatePercentages();

		// 2. read percentages from the budget controller
		var percentages = budgetCtrl.getPercentages();

		// 3. Update the UI with the new percentages
		console.log(percentages);
	};

	var ctrlAddItem = function() {
		var input, newItem;


		// 1. Get field input data
		input = UICtrl.getInput();

		// If the fields aren't empty
		if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

			// 2. Add item to the budget controller
			newItem = budgetCtrl.addItem(input.type, input.description, input.value);

			// 3. Add the new item to UI
			UICtrl.addListItem(newItem, input.type);

			// 4. Clear the fields
			UICtrl.clearFields();

			// 5. Calculate & update budget
			updateBudget();

			// 6. Calculate & update percentages
			updatePercentages();

		}
	};

	var ctrlDeleteItem = function(event) {
		var itemID, splitID, type, ID;

		// Select the ID of parents
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;


		// If an ID exists...
		if(itemID) {

			splitID = itemID.split('-');
			// Returns an array ex: ['inc', '1']

			type = splitID[0];
			// grabs type ex: inc or exp

			ID = parseInt(splitID[1]);
			// grabs ID number as a number (not a string)


			// 1. Delete the item from the datastructure
			budgetCtrl.deleteItem(type, ID);

			// 2. Delete the item from the user interface
			UICtrl.deleteListItem(itemID);

			// 3. Update & show the new budget
			updateBudget();

			// 4. Calculate & update percentages
			updatePercentages();

		}

	};

	return {
		init: function() {
			console.log('Application has started.');
			setupEventListeners();
			UICtrl.displayBudget({
				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: -1
			});
		}
	};


})(budgetController, UIController);


controller.init();