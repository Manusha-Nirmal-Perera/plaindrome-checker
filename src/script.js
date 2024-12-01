const textInput = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('resultxt');

function processInput(event) {
    event.preventDefault();

    const inputAfterSubmit = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (inputAfterSubmit === "") {
        alert("Please input a value");
        return;
    }

    const reversedInput = inputAfterSubmit.split('').reverse().join('');
    const isPalindrome = inputAfterSubmit === reversedInput;

    result.innerHTML = `<span id="bold">${textInput.value}</span>`;
    if (isPalindrome) {
        resultxt.innerHTML += ' is a palindrome';
    } else {
        resultxt.innerHTML += ' is not a palindrome';
    }
}

btn.addEventListener("click", processInput);