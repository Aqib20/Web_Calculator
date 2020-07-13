const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return    
    }
    currentNumber = result
    calculationOperator = ''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    console.log(event.target.value)
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    console.log(event.target.value)
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percentageNumber = () => {
    if(currentNumber === '0') {
        return
    }
    currentNumber = currentNumber/100
}
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) => {
    console.log(event.target.value)
    percentageNumber(event.target.value)
    updateScreen(currentNumber)
})