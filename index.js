function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
}


var ran1 = getRandomNumber();
var ran2 = getRandomNumber();

var fileName1 = 'images/dice' + ran1 + '.png';
var fileName2 = 'images/dice' + ran2 + '.png';

var dice1 = document.getElementsByClassName('img1')[0];
var dice2 = document.getElementsByClassName('img2')[0];

dice1.setAttribute('src', fileName1);
dice2.setAttribute('src', fileName2);

if (ran1 > ran2) {
    document.querySelector('h1').innerHTML = 'Play 1 Wins!';
} else if (ran1 == ran2) {
    document.querySelector('h1').innerHTML = "Draw!";
} else {
    document.querySelector('h1').innerHTML = 'Play 2 Wins!';
}