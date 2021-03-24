document.getElementById('button').addEventListener('click', fees)
let age = 0
let day = 0
// This makes the function run once the button is clicked, as well as set up the values for age and day

function fees () {
  age = document.getElementById('age').value
  age = parseInt(age)
  // This sets takes the input from the text box and turns it into a numerical value for the program 

  day = document.getElementById('day').value
  // This sets the value of the inputed day to a variable

  if ((day === 'Tuesday' || day === 'Thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('line1').innerHTML = 'You are eligible for student pricing'
  } else {
    document.getElementById('line1').innerHTML = 'You must pay the regular price'
  }
  // This statement says that if the inputed day is Monday or Thursday, or if the user inputed a number between (and including) 12 and 21, the text will go to first option. If the days are incorrect, and the age does not match the set range, then the program will run the secound option

  document.getElementById('line2').innerHTML = 'Thank you for visitng our website, we hope to see you soon!'
  // Regardless of the choice, this line of text will always play as it is outside of the if funciton
}
