const phrases = [
  'help servers are expensive',
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

//updates
const root = document.querySelector(':root');
const colorIndex = parseInt(Math.random() * colors.length);
root.style.setProperty('--secondary-color', colors[colorIndex]);

const phraseText = document.querySelector('.phrase');
const phraseIndex = parseInt(Math.random() * phrases.length);
phraseText.textContent = phrases[phraseIndex];



