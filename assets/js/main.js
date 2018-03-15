//Variables
let targetNumber = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let score = 0;
let wins = 0;
let losses = 0;


//Functions
function init() {
    score = 0;
    $(`#score`).text(score);
    targetNumber = setTarget();
    crystal1 = setCrystal(crystal1);
    crystal2 = setCrystal(crystal2);
    crystal3 = setCrystal(crystal3);
    crystal4 = setCrystal(crystal4);
}

function setTarget(){
targetNumber = Math.round(Math.random() * 100 + 1);
$(`#targetNumber`).text(targetNumber);
return targetNumber;
}

function setCrystal(crystal) {
crystal = Math.round(Math.random() * 15);
return crystal;
}

function winLossCheck() {
    if (targetNumber === score) {
        wins++;
        $(`#wins`).text(wins + ` `);
    }
    if (targetNumber < score) {
        losses++;
        $(`#losses`).text(losses + ` `);
    }
}

function updateScore(button) {
    if (targetNumber > score) {
        score = score + button;
        $(`#score`).text(score);
        winLossCheck();
        return score;
    } else {
        return false;
    }
}
//Events
$(document).ready(function() {
    init();
    $(`#button1`).on(`click`, function() {
        updateScore(crystal1);
    });
    $(`#button2`).on(`click`, function() {
        updateScore(crystal2);
    });
    $(`#button3`).on(`click`, function() {
        updateScore(crystal3);
    });
    $(`#button4`).on(`click`, function() {
        updateScore(crystal4);
    });
    $(`#reset`).on(`click`, function() {
        init();
    });

});