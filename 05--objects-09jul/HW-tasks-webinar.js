/* -------------------------------TASK-01-------------------
Написати функцію `without`, котра повертає новий обь'єкт без вказаних значень.

Arguments:
- _object_ - будь-який обь'єкт
- _propertyName_ - назва властивості для видалення

Return value
Обʼєкт, у якого вказана властивість має значення `null`.

Код для перевірки:
```js
const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
console.log(without(data, 'address',)) // { login: 'gogi', password: 'GloryOfUkraine', address: null}
```
*/
// const data = { 
//     login: 'gogi', 
//     password: 'GloryOfUkraine', 
//     address: 'Kiev' 
// }
// function without (object, propertyName) {
//  for (let key in object) {
//     if (key === propertyName) {
//         data[key] = null
//     }
//  }
//     return data
// }
// console.log(without(data, 'address',))

/* -------------------------------TASK-02---------------------
TASK-02
Написати функцію `profileMagazine`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

Arguments:
- _label_ - назва магазину
- _schedule_ - розклад роботи
- _products_ - масив продуктів, наявних на складі

Return value
Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - `makeBlackFriday`, `verifySore`

метод `makeBlackFriday`
Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

Arguments:
- _discount_ - розмір знижки числом від 0 до 1

Return value
Відсутнє

метод `verifySore`
Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі.
Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

Arguments:
- _store_ - массив товарів на складі

Return value
Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині.
*/
function createProduct(name, productPrice, qty) {
    const product = {
        name,
        price: productPrice,
        qty,
        makeSale: function (discount) {
            if (discount <= 0 || discount >= 1) {
                console.error('Wrong argument type. Should be > 0 and < 1');
                return null;
            }
            this.price = this.price * discount;
        }
    }
    return product;
}

let shampoo = createProduct("L'oreal", 200, 1000);
console.log(shampoo);

// function profileMagazine (label, schedule, products = []) {
//     const magazine = {
//         label,
//         schedule,
//         products: {
//             table: {
//                 qty,
//             }, 

//         }
//     }

//     // make Sale: function(discount) {

//     // }

// }