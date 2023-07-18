console.log('hello');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorBtn = document.querySelector('#scissor-btn');

const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#compScore');

const pChoice = document.querySelector('#playerChoice');
const cChoice = document.querySelector('#compChoice');

const replayBlock = document.querySelector('#replay-content');

const pResult = document.createElement('p');

function updateScore(player_score, comp_score) {

pScore.innerText = `Score = ${player_score}`;
cScore.innerText = `Score = ${comp_score}`;

}

function ReplayMenu(){
    const rMenu = document.querySelector('#replayModal');
    rMenu.style.display = 'block';

    const rButton = document.querySelector('#replayButton');
    rButton.addEventListener('click' , () => {
        rMenu.style.display = 'none';
        game();
    })
}

function getComputerchoice() {
    var index = Math.floor(Math.random() * 3); //random = 0 - 1  floating point.
    return index;
}

function playerChoice() {
    return new Promise((resolve) => {
        rockBtn.addEventListener('click', (event) => {
            event.preventDefault();
            resolve(0);
        });

        paperBtn.addEventListener('click', (event) => {
            event.preventDefault();
            resolve(1);
        });

        scissorBtn.addEventListener('click', (event) => {
            event.preventDefault();
            resolve(2);
        });
    });
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

    const probab = [
        [0, 2, 1],
        [1, 0, 2],
        [2, 1, 0],
    ];
    result = probab[playerSelect][compSelect];
    return result;
}

function display_round_outcome(result, playerSelect, compSelect) {
    var choices = ["Rock", "Paper", "Scissors"];

    cChoice.innerText = `Choice = ${choices[compSelect]}`;
    pChoice.innerText = `Choice = ${choices[playerSelect]}`;
    if (result === 0) {
        return `DRAW!! Both of you chose ${choices[playerSelect]}`;
    } else if (result === 1) {
        return `YOU WIN!! Your Choice = ${choices[playerSelect]} and Computer = ${choices[compSelect]}`;
    } else {
        return `YOU LOSE!! Your Choice = ${choices[playerSelect]} and Computer = ${choices[compSelect]}`;
    }
    
}

async function game() {
    var score_comp = 0;
    var score_player = 0;
    var result = 0;

    while (score_comp < 5 && score_player < 5) {
        const compSelect = getComputerchoice();
        const playerSelect = await playerChoice();

        result = playRound(playerSelect, compSelect);

        if (result === 1) {
            score_player++;
        } else if (result === 2) {
            score_comp++;
        }
        updateScore(score_player,score_comp);
        console.log(display_round_outcome(result, playerSelect, compSelect));
    }

    if (score_player === 5) {
        pResult.innerText = 'YOU WIN!!';
        replayBlock.appendChild(pResult);
        console.log(`YOU HAVE WON THE GAME`);
    } else {
        pResult.innerText = 'YOU LOSE!!';
        replayBlock.appendChild(pResult);
        console.log(`YOU HAVE LOST THE GAME`);
    }
    ReplayMenu();
}

game();
