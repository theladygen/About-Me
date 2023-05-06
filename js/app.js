'use strict';
let userName = '';
let correctAnswers = 0;

function userGreeting(){
  userName = prompt ('Hi! What\'s your name?');
  userName = userName.trim();
  while (userName === '' || userName === null) {
    userName = prompt ('Don\'t be shy now.');
  }
  alert(`Hello, ${userName}! I hope you enjoy my website.`);
}

let questions = [
  'Let\'s play Get to Know Genevieve. Here\'s an easy warm up question: Do I like cats: yes or no?',
  'Am I a good cook: yes or no?',
  'Can I roller skate: yes or no?',
  'Do I sunburn easily: yes or no?',
  'For all the marbles: Can I pet a cat while applying sunscreen to go out roller skating and simultaneously remember to take my dinner out of the oven before I leave and it burns: yes or no?!?'
];

let onlyYesOrNo = [
  'Aw, come on! Do I like cats: yes or no?',
  'Only yes or no answers, if you don\'t mind.',
  'Stick to yes or no answers, please.',
  'A yes or no will do just fine.',
  'This is a big one, folks. Only yes or no will do.'
];

let answerYes = [
  'Yay! It\'s like you know me already.',
  'You have such faith in me, shucks!',
  'I could when I was 12. As an adult it\'s tbd...',
  'Did my million and one freckles tip you off?',
  'That\'s it! You\'re hired as my new inspirational coach!!!'
];

let answerNo = [
  'Oof! We\'re off to a bad start here.',
  'Unfortunately, you\'re not wrong.',
  'We\'ll find out when my new skates get here...',
  'I don\'t spontaneously combust like a vampire, but it\'s close.',
  'I mean, seriously. WHO could do all o\' that?!'
];

let tryAgain = [
  'Only yes or no answers, purrlease.',
  'Only yes or no answers, friend. I can take it.',
  'A simple yes or no will suffice.',
  'Yes or no answers only.',
  'Rules are rules. It\'s either a yes, or it\'s a no. No pressure.'
];

function quiz(questions, onlyYesOrNo, answerYes, answerNo, tryAgain){
  for(let i = 0; i < questions.length; i++) {
    let answer;
    while (answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n') {
      answer = prompt(questions[i]);
      while (answer === '' || answer === null) {
        answer = prompt(onlyYesOrNo[i]);
      }
      answer = answer.trim().toLowerCase();
      if (answer === 'yes' || answer === 'y') {
        alert(answerYes[i]);
        correctAnswers++;
      } else if (answer === 'no' || answer === 'n') {
        alert(answerNo[i]);
      } else {
        alert(tryAgain[i]);
      }
    }
  }
}

function numGame(){
  let number = 2;
  let pickNumInt;
  for(let i = 0; i < 4; i++) {
    let pickNum = prompt('Pick a number between 1 and 5.');
    pickNumInt = parseInt(pickNum);
    if(isNaN(pickNumInt) || pickNumInt === '' || pickNumInt === null){
      alert('Oopsie! That\'s not a number. Try again.');
    }
    else if(pickNumInt < number){
      alert('Too low, guess again.');
    }
    else if(pickNumInt > number){
      alert('Too high, guess again.');
    }
    else {
      alert('You\'re right!');
      correctAnswers++;
      break;
    }
  }
  if(pickNumInt !== number){
    alert('Shoot, you ran out of guesses. The number was 2.');
  }
}

function petNames(){
  let catNames = ['Fox', 'Sophie', 'Oliver', 'Albus','Bug'];
  let hasGuessedRight = false;
  for(let i = 0; i < 6; i++){
    let pickCat = prompt('I have 5 cats... can you guess one of their names?').toLowerCase();
    for(let j = 0; j < catNames.length; j++){
      if(catNames[j].toLowerCase() === pickCat){
        alert('Nice job!');
        hasGuessedRight = true;
        correctAnswers++;
        break;
      }
    }
    if (hasGuessedRight === true) {
      break;
    } else {
      alert('Nope. Try again!');
    }
  }
  if(!hasGuessedRight){
    alert('Bummer. Good guesses, though.');
  }
  let catNamesString = '';
  for(let i = 0; i < catNames.length - 1; i++){
    catNamesString = catNamesString + catNames[i] + ', ';
  }
  catNamesString = catNamesString + 'and ' + catNames[catNames.length - 1];
  alert(`A+ for effort! My cat's names are ${catNamesString}.`);
}

function fareWell(){
  alert(`Yay! You got ${correctAnswers} out of 7!`);
  alert(`It was so fun playing this game with you today, ${userName}! I hope you had a good time.`);
}

userGreeting();
quiz(questions,onlyYesOrNo,answerYes,answerNo,tryAgain);
numGame();
petNames();
fareWell();
