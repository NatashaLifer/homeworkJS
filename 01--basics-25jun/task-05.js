/* TASK - 5
 
Напишіть програму кавова машина.
Програма приймає монети і готує напій (Кава 25грн, капучино 50грн, чай 10грн).
Тобто користувач вводить у 1 модальне вікно суму грошей у 2 назву напою.
Залежно від того, яку назву було введено - потрібно обчислити здачу і вивести повідомлення: "Ваш напій НАЗВА НАПОЮ і здача СУМА ЗДАЧІ"
У разі якщо користувач ввів суму без здачі - виводити повідомлення: "Ваш напій НАЗВА НАПОЮ. Дякуємо за точну суму!))"
*/

let userMoney = prompt ('Скільки гривен ви заплатили?')
let userDrink = prompt ('Введіть назву напою, який ви хочете отримати.')
let change = 0
if (userMoney === '25' && userDrink === 'кава' 
 || userMoney === '50' && userDrink === 'капучино'
 || userMoney === '10' && userDrink === 'чай') {
    alert ('Ваш напій ' + userDrink + '. Дякуємо за точну суму!')
} else if (userDrink === 'кава' && userMoney > 25) {
    change = userMoney - 25
    alert ('Ваш напій ' + userDrink + ' і здача ' + change + ' гривен.')
} else if (userDrink === 'капучино' && userMoney > 50) {
    change = userMoney - 50
    alert ('Ваш напій ' + userDrink + ' і здача ' + change + ' гривен.')
} else if (userDrink === 'чай' && userMoney > 10) {
    change = userMoney - 10
    alert ('Ваш напій ' + userDrink + ' і здача ' + change + ' гривен.')
} else {
    alert ("Ви заплатили недостатньо коштів, щоб отримати " + userDrink)
}