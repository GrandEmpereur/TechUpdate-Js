//welcome to this file
//we'll here detail how to use code in javascript with ofc html and css
//the goal is to understand javascript 


//add text when we click on a button 01-learn
// document.addEventListener("DOMContentLoaded", function() { 
//     function createParagraph() {
//       let para = document.createElement('p');
//       para.textContent = 'you clicked on the button!';
//       document.body.appendChild(para);
//     }
  
//     const buttons = document.querySelectorAll('button');
  
//     for(let i = 0; i < buttons.length ; i++) {
//       buttons[i].addEventListener('click', createParagraph);
//     }
//   });

// game : find the number 

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus(); //automatically place the cursor in the text field

function checkGuess() { //function

    let userGuess = Number(guessField.value); //number is checking if we type a number in the field
        if (guessCount === 1) {
            guesses.textContent = 'Propositions précédentes : ';
        }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'well done, you have find the right number !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! you lose !!!';
        setGameOver();
    } else {
        lastResult.textContent = 'False!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
        lowOrHi.textContent = 'the number you type is to small !';
        } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'the number you type is to big !';
        }
    }

guessCount++;
guessField.value = '';
guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {

    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {

    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}

//operators concatenation
let name = 'Bingo ';
name;
name += 'it\'s Clément here';
let hello = ' say hello !';
hello;
let greeting = name + hello;
greeting;

const button = document.querySelector('button');
button.onclick = function() {
    let name = prompt('What\'s your name ?');
    alert('hi ' + name + ', nice to see you here !');
}
let myName = 'clément';
let age = 20;
let character = {name : 'anakin', rank : 'jedi knight'};