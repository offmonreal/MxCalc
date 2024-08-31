document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculator-screen');
    const buttons = document.querySelectorAll('button');

    let currentValue = '0';
    let previousValue = '';
    let operation = null;
    let shouldResetScreen = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                inputNumber(button.textContent);
            } else if (button.classList.contains('operator')) {
                inputOperator(button.textContent);
            } else if (button.classList.contains('decimal')) {
                inputDecimal();
            } else if (button.classList.contains('clear')) {
                clear();
            } else if (button.classList.contains('equal')) {
                calculate();
            }
            updateDisplay();
        });
    });

    function inputNumber(number) {
        if (shouldResetScreen) {
            currentValue = number;
            shouldResetScreen = false;
        } else {
            currentValue = currentValue === '0' ? number : currentValue + number;
        }
    }

    function inputOperator(op) {
        if (operation !== null) calculate();
        previousValue = currentValue;
        operation = op;
        shouldResetScreen = true;
    }

    function inputDecimal() {
        if (!currentValue.includes('.')) {
            currentValue += '.';
        }
    }

    function clear() {
        currentValue = '0';
        previousValue = '';
        operation = null;
    }

    function calculate() {
        if (operation === null || shouldResetScreen) return;
        let result;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        currentValue = result.toString();
        operation = null;
        shouldResetScreen = true;
    }

    function updateDisplay() {
        display.value = currentValue;
    }
});