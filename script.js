let userAge = 0
let userDay = 0
document.getElementById('start').addEventListener('click', qualification)

function qualification () {
  userDay = document.getElementById('day').value
  userAge = document.getElementById('age').value
  userAge = parseInt(userAge)
  if ((userDay === 'thursday' || userDay === 'tuesday') || (userAge <= 21 && userAge >= 12)) {
    document.getElementById('answer').innerHTML = 'you qualify for student pricing'
  } else {
    document.getElementById('answer').innerHTML = "you don't qualify for student pricing"
  }
}
