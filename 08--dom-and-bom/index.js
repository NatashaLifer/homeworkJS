// Написати функцію `checkMoney`, яка будет перевіряти та підсвічувати елементи з заданого списку.

// - Якщо сума складає менше 20% від цілі - фарбуємо елемент з класом `list-text` в червоний колір
// - Якщо менше 50% - жовтий
// - Від 90% та більше - зелений.


const allItems = document.querySelectorAll('.list__item')

const checkMoney = () => {

    allItems.forEach((item) => {
        let value = item.querySelector('.list__value')
        let goal = item.querySelector('.list__goal-value')
        let valueText = item.querySelector('.list__text')
        
        if (+value.textContent < +goal.textContent*0.2) {
            valueText.style.color = 'red'
        } else if (+value.textContent < +goal.textContent*0.5) {
            valueText.style.color = 'yellow'
        } else if (+value.textContent > +goal.textContent*0.9) { 
            valueText.style.color = 'green'
        }

    })
}
checkMoney()
