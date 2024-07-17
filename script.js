


const buttons = document.querySelectorAll('button');
const inputBox = document.getElementById('inputBox');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
  // Get the button value
        const value = button.textContent;
        
        // If AC is pressed, clear the input
        if (value === 'AC') {
            inputBox.value = '';
        } 
        // If DEL is pressed, remove the last character
        else if (value === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1);
        } 
        // If = is pressed, evaluate the expression
        else if (value === '=') {
            try {
                inputBox.value = eval(inputBox.value);
            } catch {
                inputBox.value = 'Error';
            }
        } 
        // For other buttons, append the value to the input
        else {
            inputBox.value += value;
        }
    });
});
