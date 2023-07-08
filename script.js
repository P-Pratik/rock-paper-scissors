
function getComputerchoice() {
    var index = Math.floor(Math.random() * 3);   //random = 0 - 1  floating point. 
    return index;
}

function playerChoice() {
    var choice = prompt("Enter your Choice");
    return parseInt(choice);
}

function playRound(playerSelect, compSelect) {
    /*
    0 = rock 
    1 = paper 
    2 = scissors

    0 = draw 
    1 = win   
    2 = lose
    */
    var choices = ["rock", "paper", "scissors"];
    const probab = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
    var result = probab[playerSelect][compSelect];

    if (result === 0) {
        return `DRAW!! Both of you chose ${choices[playerSelect]}`;
    }
    else if (result === 1) {
        return `YOU WIN!! Your Choice = ${choices[playerSelect]} and Computer = ${choices[compSelect]}`;
    }
    else {
        return `YOU LOSE!! Your Choice = ${choices[playerSelect]} and Computer = ${choices[compSelect]}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const compSelect = getComputerchoice();
        const playerSelect = playerChoice();
        console.log(playRound(playerSelect, compSelect));
    }
}

game();
// console.log(compSelect);
// console.log(playerSelect);