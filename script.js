
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

    const probab = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
    result = probab[playerSelect][compSelect];
    return result;

}

function display_round_outcome(result,playerSelect,compSelect) {
    var choices = ["rock", "paper", "scissors"];
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
    var score_comp = 0;
    var score_player = 0;
    var result = 0;

    while (score_comp < 5 && score_player < 5) {
        const compSelect = getComputerchoice();
        const playerSelect = playerChoice();
        result = playRound(playerSelect, compSelect);
        if (result === 1) {
            score_player++;
        }
        else if (result === 2) {
            score_comp++;
        }
        console.log(display_round_outcome(result,playerSelect,compSelect));
    }

    if (score_player === 5) {
        console.log(`YOU HAVE WON THE GAME`);
    }
    else {
        console.log(`YOU HAVE LOST THE GAME`);
    }
}
game();
