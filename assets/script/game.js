$(document).ready(() => {
    appendInstructions();
    startNewRound();
});

const CRYSTAL_COUNT = 4;
const MAX_CRYSTAL_VALUE = 100;
const MIN_CRYSTAL_VALUE = 10;
let winCount = 0;
let lossCount = 0;

let crystalValues = [];
let winningCombo = [];
let targetValue = 0;
let totalScore = 0;

const startNewRound = () => {
    // update scoring
    if (winCount === 0) {
        updateWins(winCount);
    } else {
        updateWins(++winCount);
    }
    if (lossCount === 0) {
        updateLosses(lossCount);
    } else {
        updateLosses(++lossCount);
    }
    if (totalScore === 0) {
        updateTotalScore(totalScore);
    }

    // get new crystal values
    crystalValues = getCrystalValues(CRYSTAL_COUNT);

    // get new target value
    targetValue = getTargetValue(crystalValues);

    // set crystal btn listeners

};

const updateCrystalValues = (crystalValues) => {
    crystalValues.forEach((value) => {

    });
};

const getTargetValue = (valueSet) => {
    let targetValue = 0;

    // reset winning combo array
    winningCombo = [];

    valueSet.forEach((value) => {
        let comboMultiplier = getRandomInt(0,3);
        winningCombo.push(comboMultiplier);
        targetValue += value * comboMultiplier;
    });

    /*
        If there was no target value set through
        multiplier logic; set the target value
        equal to the first int in the set.
    */
    if (targetValue === 0) {
        targetValue = valueSet[0];
    }

    return targetValue;
};

const getCrystalValues = (crystalCount) => {
    let crystalValues = [];
    for (let i = crystalCount; crystalCount <=0; crystalCount--) {
        crystalValues.push(getRandomInt(MIN_CRYSTAL_VALUE, MAX_CRYSTAL_VALUE));
    }
    return crystalValues;
}

const updateTotalScore = (totalScore) => {
    $('.panel__score').text(totalScore);
};

const updateWins = (winCount) => {
    $('.panel__wins').text();
}

const updateLosses = (lossCount) => {
    $('.panel__losses').text();
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const appendInstructions = () => {
    $('.panel__instructions').text(INSTRUCTIONS);
};

const INSTRUCTIONS = 
`You will be given a target number at the start of the game.

There are four crystals below. Each crystal has a numeric 
value attached, which is hidden from the user. When you
click a crystal the crystal's value will be added to your
total score. The value of each crystal is reset at the 
start of every new game.

You win the game by matching your total score to the target number;
you lose the game if your total score goes above the target number.`;