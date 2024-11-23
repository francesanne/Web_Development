
const display = document.getElementById('user-input');
display.textContent = '0';
const buttons = document.querySelectorAll('.calculator-keys button');

let expression = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            expression = '';
        } else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1);
        }
        else if (!isNaN(parseFloat(buttonText))) {
            expression += buttonText;
        }
        else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            expression += ' ' + buttonText + ' ';
        }
        else if (buttonText === '=') {
            try {
                const result = eval(expression);
                expression = result.toString();
            } catch (error) {
                expression = 'Error';
            }
        }
        display.textContent = expression.trim() || '0'; 
    });
});
