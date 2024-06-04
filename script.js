document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                display.textContent = '0';
            } else if (['/', '*', '-', '+'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else if (value === '=') {
                if (currentInput !== '' && firstOperand !== null) {
                    const secondOperand = parseFloat(currentInput);
                    let result;
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                        default:
                            return;
                    }
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = '';
                    firstOperand = null;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
