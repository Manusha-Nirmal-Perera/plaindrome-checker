# Palindrome Checker

## Description

This project is a simple **Palindrome Checker** that determines if a given word or sentence is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

The project allows users to input text into a form and click the "Check" button to determine if the input is a palindrome. The result is displayed on the page, indicating whether the input is or is not a palindrome.

## Features

- User-friendly interface for checking if a word or sentence is a palindrome.
- Automatically ignores non-alphanumeric characters and is case-insensitive.
- Displays whether the input is a palindrome or not.

## Project Structure

- `index.html` - The main HTML file containing the structure of the web page.
- `styles.css` - The CSS file for styling the page (linked in `index.html`).
- `script.js` - The JavaScript file responsible for handling user input and processing the palindrome logic.

## Installation

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a browser to view and interact with the application.

## Usage

1. Enter a word or sentence into the input box.
2. Click the "Check" button to determine if the input is a palindrome.
3. The result will appear below the button, stating whether the input is a palindrome or not.

### Example:

- Input: "Madam"
  - Output: "Madam is a palindrome"
  
- Input: "Hello"
  - Output: "Hello is not a palindrome"

## Code Explanation

### JavaScript (`script.js`)
- When the button is clicked, the `processInput` function is triggered.
- The input is processed by removing non-alphanumeric characters and converting it to lowercase.
- The input is then reversed and compared to the original input. If they match, the input is a palindrome.
- The result is dynamically updated on the page, indicating whether the input is a palindrome.

## Demo

You can try the application by opening the `index.html` file in your browser.

## Author

This project is created by **Nirmal**.

