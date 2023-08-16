// ## TASK-01
// Написати стрілочну функцію `fill`, котра повертає массив конктретної довжини с заповненим значенням.
// #### Arguments:
// - arraySize - довжина массиву
// - value - значення для наповнення
// #### Return value
// Массив з заданою довжиною, та заповнений переданим значенням

// const fill = (arraySize, ...value) => {
//     const arrayFull = [...value]
//     let arrayFill = arrayFull.slice(0, arraySize)
//     return arrayFill
// }
// console.log(fill(3, 8, 'lll', 33, 22, 5));

// ##TASK 01 - як і зазначив перший раз, почитати доку і переписати)
// Для створення масиву певної довжини простіше всього було скористатися такою штукою як new Array() і параметром йому передати його довжину: 
// let arrToFill = new Array(arraySize)
// А потім просто використати метод масиву fill() і не заморачуватися з разними value та просто передати якийсь один параметр
// Рекомендую почитати документацію по new Array() та fill() і переписати з урахуванням поправок на вітер) 

// const fill = (arraySize, value) => {
//     let arrToFill = new Array(arraySize).fill(value);     
//     return arrToFill
// }
// console.log(fill(3, 'S'));




// ## TASK-02
// Написати функцію `reverseArray, котра повертає реверснутий массив значень, але без застосування методу .reverse()
// #### Arguments:
// - _array_ - массив значень
// #### Return value
// Повертає реверснутий массив значень


// const reverseArray = (array) => {
// let reverseArr = []
// for (let i=array.length - 1; i >= 0; i--) {
//     reverseArr.push(array[i])
// }
// return reverseArr
// }
// const exmpl = [1, 2, 3];
// console.log(reverseArray(exmpl)); // [3, 2, 1]
        
        
        
// ## TASK-03
// Вам надано два відсортовані масиви, які містять лише цілі числа. Потрібно реалізувати метод `mergeArrays`, 
// який буде об'єднувати обидва масива в один, відсортований за зростанням.
// #### Arguments:
// - _firstArray - перший відсортований масив
// - _secondArray_ - другий відсортований масив
// #### Return value
// Повертає масив цілих чисел відстортований за зростанням, що мівстить усі елементи обох масиві в переданих у параметрах.
// ### Exmaple
// `mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]) --> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]`
        
// const mergeArrays = (firstArray, secondArray) => {
//     let joinedArray = [...firstArray, ...secondArray]
//     let sortArray = joinedArray.filter ((item, index) => {
//         return (joinedArray.indexOf(item) === index) 
//     })
//     sortArray.sort(function(a, b) {
//         return a - b;
//     })
//     return sortArray
// }
        
// ##TASK 03 - переписати з використанням стрілочних функцій та methods chaining (якщо не розбирали що це таке, то можеш почитати доку, або поспрашувать мене)

// const mergeArrays = (firstArray, secondArray) => {
// const sortArray = firstArray.concat(...secondArray).sort((a, b) => {return a - b;})
// return sortArray   
// }

const mergeArrays = (firstArray, secondArray) =>
  [...firstArray, ...secondArray].sort((a, b) => a - b);
                
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
                
                
                