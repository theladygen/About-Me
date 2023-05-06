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


function cats(){
  let answerCats = '';
  while (answerCats !== 'yes' && answerCats !== 'y' && answerCats !== 'no' && answerCats !== 'n') {
    answerCats = prompt('Let\'s play Get to Know Genevieve. Here\'s an easy warm up question: Do I like cats: yes or no?');
    while (answerCats === '' || answerCats === null) {
      answerCats = prompt('Aw, come on! Do I like cats: yes or no?');
    }
    answerCats = answerCats.trim().toLowerCase();
    switch (true) {
    case (answerCats === 'yes' || answerCats === 'y'):
      alert('Yay! It\'s like you know me already.');
      correctAnswers++;
      break;
    case (answerCats === 'no' || answerCats === 'n'):
      alert('Oof! We\'re off to a bad start here.');
      break;
    default:
      alert('Only yes or no answers, purrlease.');
      break;
    }
  }
}


function cook(){
  let answerCook = '';
  while (answerCook !== 'yes' && answerCook !== 'y' && answerCook !== 'no' && answerCook !== 'n') {
    answerCook = prompt('Am I a good cook: yes or no?');
    while (answerCook === '' || answerCook === null) {
      answerCook = prompt('Only yes or no answers, if you don\'t mind.');
    }
    answerCook = answerCook.trim().toLowerCase();
    switch (true) {
    case (answerCook === 'yes' || answerCook === 'y'):
      alert('You have such faith in me, shucks!');
      correctAnswers++;
      break;
    case (answerCook === 'no' || answerCook === 'n'):
      alert('Unfortunately, you\'re not wrong.');
      break;
    default:
      alert('Only yes or no answers, friend. I can take it.');
      break;
    }
  }
}


function skate(){
  let answerSkate = '';
  while (answerSkate !== 'yes' && answerSkate !== 'y' && answerSkate !== 'no' && answerSkate !== 'n') {
    answerSkate = prompt('Can I roller skate: yes or no?');
    while (answerSkate === '' || answerSkate === null) {
      answerSkate = prompt('Stick to yes or no answers, please.');
    }
    answerSkate = answerSkate.trim().toLowerCase();
    switch (true) {
    case (answerSkate === 'yes' || answerSkate === 'y'):
      alert('I could when I was 12. As an adult it\'s tbd...');
      correctAnswers++;
      break;
    case (answerSkate === 'no' || answerSkate === 'n'):
      alert('We\'ll find out when my new skates get here...');
      break;
    default:
      alert('A simple yes or no will suffice.');
      break;
    }
  }
}


function sunburn(){
  let answerSunburn = '';
  while (answerSunburn !== 'yes' && answerSunburn !== 'y' && answerSunburn !== 'no' && answerSunburn !== 'n') {
    answerSunburn = prompt('Do I sunburn easily: yes or no?');
    while (answerSunburn === '' || answerSunburn === null) {
      answerSunburn = prompt('A yes or no will do just fine.');
    }
    answerSunburn = answerSunburn.trim().toLowerCase();
    switch (true) {
    case (answerSunburn === 'yes' || answerSunburn === 'y'):
      alert('Did my million and one moles tip you off?');
      correctAnswers++;
      break;
    case (answerSunburn === 'no' || answerSunburn === 'n'):
      alert('I don\'t spontaneously combust like a vampire, but it\'s close.');
      break;
    default:
      alert('Yes or no answers only.');
      break;
    }
  }
}


function marbles(){
  let answerMarbles = '';
  while (answerMarbles !== 'yes' && answerMarbles !== 'y' && answerMarbles !== 'no' && answerMarbles !== 'n') {
    answerMarbles = prompt('For all the marbles: Can I pet a cat while applying sunscreen to go out roller skating and simultaneously remember to take my dinner out of the oven before I leave and it burns: yes or no?!?');
    while (answerMarbles === '' || answerMarbles === null) {
      answerMarbles = prompt('This is the big one, folks. Only yes or no will do.');
    }
    answerMarbles = answerMarbles.trim().toLowerCase();
    switch (true) {
    case (answerMarbles === 'yes' || answerMarbles === 'y'):
      alert('That\'s it! You\'re hired as my new inspirational coach!!!');
      correctAnswers++;
      break;
    case (answerMarbles === 'no' || answerMarbles === 'n'):
      alert('I mean, seriously. WHO could do all o\' that?!');
      break;
    default:
      alert('Rules are rules. It\'s either a yes, or it\'s a no. No pressure.');
      break;
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
cats();
cook();
skate();
sunburn();
marbles();
numGame();
petNames();
fareWell();
