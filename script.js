document.getElementById('button').addEventListener('click', fees)
let age = 0
let day = 0
// This makes the function run once the button is clicked, as well as set up the values for age and day

function fees () {
  age = document.getElementById('age').value
  age = parseInt(age)

  day = document.getElementById('day').value

  if ((day == 'Tuesday' || day == 'Thursday') || (age >= 12 && age <=21)) {
    document.getElementById('line1').innerHTML = 'You are eligible for student pricing'
  } else {
    document.getElementById('line1').innerHTML = 'You must pay the regular price'
  }
  document.getElementById('line2').innerHTML = 'Thank you for visitng our website, we hope to see you soon!'
}
