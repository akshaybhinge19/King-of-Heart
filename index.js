// Import stylesheets
import './style.css';

let childCss = document.getElementById('child2');
// to start the game user has to click start button
let isStarted = false;
let start = document.getElementById('gameStart');
start.onclick = function() {
  game();
};
function game() {
  isStarted = true;
}
childCss.addEventListener('mouseover', colorChange2);
childCss.addEventListener('mouseout', colorFade2);
function colorChange2() {
  if (!isStarted) return;
  childCss.style.backgroundColor = 'pink';
}
function colorFade2() {
  if (!isStarted) return;
  childCss.style.backgroundColor = 'Transparent';
}

document.getElementById('parent').addEventListener('click', getRandomInt);
var count = 0;
let level = 1;
function getRandomInt() {
  if (!isStarted) return;
  var a = Math.floor(Math.random() * 410 + 20);
  var b = Math.floor(Math.random() * 410 + 20);
  if (count == 0) {
    document.getElementById('count').innerHTML =
      'Hearts Collected' + '<br>' + count;
  }
  childCss.style.top = a + 'px';
  childCss.style.left = b + 'px';
}
childCss.onclick = function() {
  getCount();
};
function getCount() {
  if (!isStarted) return;
  count++;
  document.getElementById('count').innerHTML =
    'Hearts Collected' + '<br>' + count;
  if (count == 10) {
    alert('Winner of Hearts');
    alert('completed Level' + level);
    document.getElementById('level').innerHTML = 'Level' + ' - ' + ++level;
    count = 0;
  }
  if (level == 10) {
    alert('Congratulations! You are the King of Hearts');
    level = 0;
  }
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
