'use strict';

let userName = prompt ('Hi! What\'s your name?');
userName = userName.trim();
while (userName === '' || userName === null) {
  userName = prompt ('Don\'t be shy now.');
}
// console.log('username is', userName);
alert('Hello, ' + userName + '! I hope you enjoy my website.');
let correctAnswers = 0;

function cats(){
  let answerCats = '';
  while (answerCats !== 'yes' && answerCats !== 'y' && answerCats !== 'no' && answerCats !== 'n') {
    answerCats = prompt('Let\'s play Get to Know Genevieve. Here\'s an easy warm up question: Do I like cats: yes or no?');
    while (answerCats === '' || answerCats === null) {
      answerCats = prompt('Aw, come on! Do I like cats: yes or no?');
    }
    answerCats = answerCats.trim().toLowerCase();
    // console.log('like cats', answerCats);
    switch (true) {
    case (answerCats === 'yes' || answerCats === 'y'):
    // console.log('Yay! It\'s like you know me already!');
      alert('Yay! It\'s like you know me already.');
      correctAnswers++;
      break;
    case (answerCats === 'no' || answerCats === 'n'):
    // console.log('Oof! We\'re off to a bad start here.');
      alert('Oof! We\'re off to a bad start here.');
      break;
    default:
    // console.log('Only yes or no answers, purrlease.');
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
    // console.log('good cook', answerCook);
    switch (true) {
    case (answerCook === 'yes' || answerCook === 'y'):
    // console.log('You have such faith in me, shucks!');
      alert('You have such faith in me, shucks!');
      correctAnswers++;
      break;
    case (answerCook === 'no' || answerCook === 'n'):
    // console.log('Unfortunately, you\'re not wrong.');
      alert('Unfortunately, you\'re not wrong.');
      break;
    default:
    // console.log('Only yes or no answers, friend: Am I a good cook? I can take it.');
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
    // console.log('can skate', answerSkate);
    switch (true) {
    case (answerSkate === 'yes' || answerSkate === 'y'):
    // console.log('I could when I was 12! As an adult it\'s tbd...');
      alert('I could when I was 12. As an adult it\'s tbd...');
      correctAnswers++;
      break;
    case (answerSkate === 'no' || answerSkate === 'n'):
    // console.log('We\'ll find out when my new skates arrive!');
      alert('We\'ll find out when my new skates get here...');
      break;
    default:
    // console.log('A simple yes or no will suffice, thanks.');
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
    // console.log('sunburn easily', answerSunburn);
    switch (true) {
    case (answerSunburn === 'yes' || answerSunburn === 'y'):
    // console.log('Did my million and one moles tip you off?');
      alert('Did my million and one moles tip you off?');
      correctAnswers++;
      break;
    case (answerSunburn === 'no' || answerSunburn === 'n'):
    // console.log('I don\'t spontaneously combust like a vampire, but it\'s close.');
      alert('I don\'t spontaneously combust like a vampire, but it\'s close.');
      break;
    default:
    // console.log('Yes or no answers only.');
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
    // console.log('good cook', answerMarbles);
    switch (true) {
    case (answerMarbles === 'yes' || answerMarbles === 'y'):
    // console.log('That\'s it! You\'re hired as my new inspirational coach!!!');
      alert('That\'s it! You\'re hired as my new inspirational coach!!!');
      correctAnswers++;
      break;
    case (answerMarbles === 'no' || answerMarbles === 'n'):
    // console.log('I mean, seriously! WHO could do all o\' that?!');
      alert('I mean, seriously. WHO could do all o\' that?!');
      break;
    default:
    // console.log('Rules are rules. It\'s either a yes, or it\'s a no. No pressure.');
      alert('Rules are rules. It\'s either a yes, or it\'s a no. No pressure.');
      break;
    }
  }
}



let number = 2;
let pickNumInt;
for(let i = 0; i < 4; i++) {
  let pickNum = prompt('Pick a number between 1 and 5.');
  // console.log('pickNum', pickNum);
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


let catNames = ['Fox', 'Sophie', 'Oliver', 'Albus','Bug'];
let hasGuessedRight = false;
for(let i = 0; i < 6; i++){
  let pickCat = prompt('I have 5 cats... can you guess one of their names?').toLowerCase();
  // console.log('pickcat', pickCat);
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
cats();

catNamesString = catNamesString + 'and ' + catNames[catNames.length - 1] + '.';
alert('A+ for effort. My cat\'s names are ' + catNamesString);


alert('Congrats! You got ' + correctAnswers + ' correct out of 7!');
alert('It was so fun playing this game with you today, ' + userName + '! I hope you had a good time.');
