'use strict';

let answerCats = prompt(
  'Let\'s play Get to Know Genevieve! Here\'s an easy warm up question: Do I like cats: yes or no?');
while (answerCats === '' || answerCats === null) {
  answerCats = prompt('Aw, come on! Let\'s play! Do I like cats: yes or no?');
}

answerCats = answerCats.trim().toLowerCase();
console.log('like cats', answerCats);

switch (answerCats) {
case 'yes':
// console.log('Yay! It\'s like you know me already!');
  alert('Yay! It\'s like you know me already!');
  break;
case 'no':
// console.log('Oof! We\'re off to a bad start here.');
  alert('Oof! We\'re off to a bad start here.');
  break;
default:
  // console.log('Only yes or no answers, purrlease.');
  answerCats = prompt('Only yes or no answers, purrlease. Do I like cats?');
  break;
  // how can i loop this particular 'purrlease' prompt under default so 1) they can't cancel out, and 2) it goes back to my yes and no case alerts above?
}

let answerCook = prompt('Am I a good cook: yes or no?');
while (answerCook === '' || answerCook === null) {
  answerCook = prompt('Only yes or no answers, if you don\'t mind.');
}

answerCook = answerCook.trim().toLowerCase();
console.log('good cook', answerCook);

switch (answerCook) {
case 'yes':
  // console.log('You have such faith in me, shucks!');
  alert('You have such faith in me, shucks!');
  break;
case 'no':
  // console.log('Unfortunately, you\'re not wrong.');
  alert('Unfortunately, you\'re not wrong.');
  break;
default:
  // console.log('Only yes or no answers, friend: Am I a good cook? I can take it.');
  answerCats = prompt(
    'Only yes or no answers, friend: Am I a good cook? I can take it.');
  break;
  // Loop???
}

// 3. Can I roller skate: yes or no?
// 4. Do I sunburn easily: yes or no?
// 5. And for all the marbles: Can I pet a cat while roller skating and applying sunscreen, all while remembering to take my dinner out of the oven before it burns: yes or no??
