'use strict';

const score = document.querySelector('.score');
let scoreNumber = 20;
let highScore = 0
let secretNumber = Math.round(Math.random() * 20);

function displayMessage(message) {
  document.querySelector('.message').textContent = message
}
function setBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('NO Number!❌');
    
  } else if (guess === secretNumber) {
    displayMessage('Currect Number & You Win The Game 🏆');
    setBackgroundColor('#60b347');
    document.querySelector('.number').style.width = "30rem"
    document.querySelector('.number').textContent = secretNumber;
    if (score.textContent > highScore) {
      highScore = score.textContent
      document.querySelector('.highscore').textContent=highScore;
    }
   
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️');
      scoreNumber--;
      score.textContent = scoreNumber;
      setBackgroundColor('#222222');
    } else {
      displayMessage('GAME OVER !');
      score.textContent = 0;
    }
  }
  
});


document.querySelector('.again').addEventListener('click', () => {
  scoreNumber=20
  secretNumber = Math.round(Math.random() * 20);
  displayMessage('🤔 Start guessing...');
  score.textContent = scoreNumber
  document.querySelector('.number').textContent = "?"
  setBackgroundColor('#222222');
  document.querySelector('.guess').value=""
})