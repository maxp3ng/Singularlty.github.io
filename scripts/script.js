const phrases = [
  'rng!',
  'Sword_Knives was here',
  'any computer is a laptop if you\'re brave enough',
  'You\'ve met with a terrible fate, haven\'t you?',
  'Waiting for something to happen?',
  'suspicious',
  'never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you',
  'getoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyhead',
  "Think you've seen the last of me?",
  'like and subscribe',
  'you cannot kill me in a way that matters',
  'bar abuse!',
  'minimalism',
  'all rights reserved',
  'total misplay',
  'i predict that the color now is neon orange',
  '',
];
const colors = [
  'rgb(255, 255, 255)',
  'rgb(255, 251, 0)',
  'rgb(0, 255, 0)',
  'rgb(255, 135, 22)',
  'rgb(255, 44, 44)',
  'rgb(44, 255, 209)',
  'rgb(113, 160, 255)',
  'rgb(20, 220, 255)',
  'rgb(59, 62, 255)',
  'rgb(160, 19, 255)',
];

//mobile check (please contact me if you know a better way to do this)
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  alert(
    "hey! it looks like you're using a mobile device, which this site currently may (probably) not support. check back in the future, or use a different device"
  );
}

//updates
const root = document.querySelector(':root');
const colorIndex = parseInt(Math.random() * colors.length);
root.style.setProperty('--secondary-color', colors[colorIndex]);

const phraseText = document.querySelector('.phrase');
const phraseIndex = parseInt(Math.random() * phrases.length);
phraseText.textContent = phrases[phraseIndex];



