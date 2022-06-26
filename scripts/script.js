const phrases = [
  //keeping this for now :skull:
  'rng!',
  'Sword_Knives was here',
  "any computer is a laptop if you're brave enough",
  "You've met with a terrible fate, haven't you?",
  'Waiting for something to happen?',
  'never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you',
  'getoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyhead',
  'like and subscribe',
  'minimalism',
  'all rights reserved',
  'total misplay',
  'help servers are expensive',
  "apathy's a tragedy and boredom is a crime",
  'fun fact: oxymoron',
  '^R^R^R^R^R^R^R',
  'Did You Know? A different message appears every time you refresh!',
  'looking for the fountain of infinite mirror',
  'coda',
];
const colors = [
  'rgb(202, 185, 241)',
  'rgb(255, 251, 0)',
  'rgb(0, 255, 0)',
  'rgb(255, 135, 22)',
  'rgb(44, 255, 209)',
  'rgb(113, 160, 255)',
  'rgb(20, 220, 255)',
  'rgb(59, 62, 255)',
  'rgb(160, 19, 255)',
  'rgb(255, 44, 44)',
];

//updates
const root = document.querySelector(':root');
const colorIndex = parseInt(Math.random() * colors.length);
root.style.setProperty('--secondary-color', colors[colorIndex]);

const phraseText = document.querySelector('.phrase');
const phraseIndex = parseInt(Math.random() * phrases.length);
phraseText.textContent = phrases[phraseIndex];
