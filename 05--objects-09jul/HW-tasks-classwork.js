/* Написати функцію яка буде повертати об'єкт кліента ресторану
* Потрібно запитати як звати клієнта та що він хоче замовити
* Стосовно замовлення, потрібно спитатись назву блюда, та його кількість
* example returned object 
* const user = {
	userName: ValueInPrompt,
	order: {
		[nameDish] : {
			qty: NUMBER
		},
	},
	orderNamesObjectToString() {
		const goodsString = 'ice cream, free,'
		for (let key in this.order) {
			goodsString += key + ','
		}
		return goodsString
	},
	orderSumm() {
		* метод який має порахувати всю сумму замовлення
		* Значення, що повертається - сумма всього замовлення
	},
	getAmount() {
		* метод об'єкта який має перевірити чи може ресторан виконати замовлення, тобто перевіри кількість од. на складі,
		* ЗНАЧЕННЯ, що повертається, - В разі якщо якогось блюда немає в ресторані, то повернути рядок "sorry, this DISH is over"
		* В разі якщо всього вистачає то повернути час за який ці страви будуть готуватись
	}, 
	getCalories() {
		* метод який має порахувати кількість калорій нашого замовлення
		* В разі якщо кількість калорій переважає 500 показати клієнту повідомлення "потрібно сходити до зали після ресторану"
		* В разі якщо кількість не перевищує показати поведомлення "Ти молодець, що дотримуєшься дієти"
	},
}
*/

const restaurant = {
	'chicken cari': {
		price: 20,
		calories: 150,
		minToDone: 10,
		qty: 4,
	},
	'rice in china': {
		price: 35,
		calories: 100,
		minToDone: 5,
		qty: 7,
	},
	burger: {
		price: 40,
		calories: 300,
		minToDone: 20,
		qty: 10,
	},
	'potate free': {
		price: 5,
		calories: 150,
		minToDone: 5,
		qty: 10,
	},
	soup: {
		price: 20,
		calories: 150,
		minToDone: 10,
		qty: 0,
	},
	'ice cream': {
		price: 30,
		calories: 250,
		minToDone: 2,
		qty: 8,
	},
}

function createUserOrder(place) {
	let userName = prompt('Enter your name')
	const user = {
		userName,
		order: {},
		// old version to write method in object
		orderSumm: function () {
			let sum = 0;
			for(let key in this.order) {
				console.log(key)
				console.log(place[key].price)
				sum = place[key].price * this.order[key].qty + sum
			}
			return sum
		},
		// function getAmount() {}
		// getAmount,

		// orderNamesObjectToString() {
		// 	const goodsString = 'ice cream, free,'
		// 	for (let key in this.order) {
		// 		goodsString += key + ','
		// 	}
		// 	return goodsString
		// },
	}

	let userOrder = prompt('What would you like to order?')
	while (userOrder !== null) {
		let qty = +prompt('Enter qty')
		user.order[userOrder] = {
				qty
			}
		
		userOrder = prompt('Maybe you want more dishes?')
	} 
	return user
}

const restoGogi = createUserOrder(restaurant)
console.log(restoGogi)

console.log('сума нашоого замовлення ====' ,restoGogi.orderSumm())

//------------ завдання на створення журналу ----------
// function createObjectClass() {
// 	// debugger;
// 	const journal = {}

// 	let name = prompt('name')

// 	while (name !== null) {
// 		let userSubject = prompt('')
// 		while (userSubject !== null) {
// 			journal[name] = {
// 				userSubject,
// 			}
// 			let userValue = prompt('value')
// 			while (userValue !== null) {
// 				journal[userSubject] = {
// 					userValue,
// 				}
// 				userValue = prompt('again value')
// 			}
// 			userSubject = prompt('again subject')
// 		}

// 		name = prompt('again name')
// 	}

// 	return journal
// }

// const res = createObjectClass()
// console.log(res)




// const object = {

// }


// object.loadFaild = false

// const user = {
// 	order: {
		
// 	}
// }

// user.order = {

// }



// let number = 2

// let newValue = number

// newValue = 'hello world'
 
// console.log(number)
// console.log(newValue);


// let gogi = {
// 	adress: 'Kiev'
// } 

// let newObjectGogi = gogi;

// newObjectGogi.adress = 'Lviv'

// console.log(gogi)
// console.log(newObjectGogi);

