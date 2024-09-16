let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button'); // Select all buttons
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);

        if (buttonText === 'x') {
            buttonText = '*'; // Change 'x' to '*' for calculations
        }
        
        if (buttonText === 'AC') {
            screenValue = '';
        } else if (buttonText === '=') {
            try {
                screenValue = eval(screenValue); // Evaluate the expression
            } catch (error) {
                screenValue = 'Error'; // Handle any errors in evaluation
            }
        } else {
            screenValue += buttonText;
        }
        
        screen.value = screenValue; // Update the screen with the new value
    });
}
