var counter = 0;
var on = false;
var power = document.getElementById('btn2');
var display = document.getElementById('display');
var num;



var greenDom = document.getElementById('green');
var redDom = document.getElementById('red');
var yellowDom = document.getElementById('yellow');
var blueDom = document.getElementById('blue');
var audioGreen = new Audio("/assets/simonSound1.mp3");
var audioRed = new Audio("/assets/simonSound2.mp3");
var audioYellow = new Audio("/assets/simonSound3.mp3");
var audioBlue = new Audio("/assets/simonSound4.mp3");

var moves = {
    "green": audioGreen,
    "red": audioRed,
    "yellow": audioYellow,
    "blue": audioBlue
};

random();
function random() {
    num = Math.floor(Math.random() * 4) + 1;
    console.log(num);
    return num;
}

if(num === 1) {
moves.green.play();
greenDom.className += " green-active";
}

else if(num === 2) {
moves.red.play();
redDom.className += " red-active";
}

else if(num === 3) {
moves.yellow.play();
yellowDom.className += " yellow-active";
}

else {
moves.blue.play();
blueDom.className += " blue-active";
}



// power button
power.addEventListener('click', function () {
    if (!on) {
        display.innerHTML = String(counter);
        on = true;
    }
    else {
        display.innerHTML = "";
        on = false;
    }
});