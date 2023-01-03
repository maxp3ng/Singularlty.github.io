
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const phrases = [ //keeping this for now :skull:
  'rng!',
  'Sword_Knives was here',
  'any computer is a laptop if you\'re brave enough',
  'You\'ve met with a terrible fate, haven\'t you?',
  'Waiting for something to happen?',
  'never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you',
  'getoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyheadgetoutofmyhead',
  'like and subscribe',
  'minimalism',
  'all rights reserved', //9
  'total misplay',
  'help servers are expensive',
  'apathy\'s a tragedy and boredom is a crime',
  'fun fact: oxymoron',
  'looking for the fountain of infinite mirror',
  'techno never dies',
  'rgb gamers',
  'frontend devs trying to center a div:',
  'backend devs when the end user inputs null:',
  '[citation needed]', //19
  'god\'s in his heaven. all\'s right in the world.',
  'ayo',
  'C:/Users/singularity/waut.dev/splashtext.txt',
  'i omor',
  'singularity doing the try to make a visually appealing portfolio challenge (impossible)',
  'i am in your walls mpfh i love eating insulation skrmpf it is like cotton candy but free i will eat your entire house like a little termite infestation s'//23
];
const colors = [
  'rgb(255, 44, 44)',
  'rgb(255, 251, 0)',
  'rgb(0, 255, 0)',
  'rgb(255, 135, 22)',
  'rgb(44, 255, 209)',
  'rgb(113, 160, 255)',
  'rgb(20, 220, 255)',
  'rgb(59, 62, 255)',
  'rgb(160, 19, 255)',
];

async function updateHTML() {
//updating html
  const root = document.querySelector(':root');
  colorIndex = parseInt(Math.random() * colors.length);
  root.style.setProperty('--secondary-color', colors[colorIndex]);

  const phraseText = document.querySelector('.phrase');
  phraseIndex = parseInt(Math.random() * phrases.length);
  //phraseIndex = 16;
  phraseText.textContent = phrases[phraseIndex];

//the funny events
  if (phraseIndex == 17) {
    phraseText.style.styleFloat = 'right';
    phraseText.style.cssFloat = 'right';
  } else if (phraseIndex == 18) {

  } else if (phraseIndex == 16) {
    while (true) {
      await sleep(500);
      colorIndex = parseInt(Math.random() * colors.length);
      root.style.setProperty('--secondary-color', colors[colorIndex]);
    }
  }
}

updateHTML();
