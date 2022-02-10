let userScore = 0, computerScore = 0;
let options = ['✊', '🖐', '✌️'];
let roundNumber = 0;

function playGround(input) {
    roundNumber++;
    if (roundNumber > 5) {
        const instructions = document.querySelector('#instructions');
        instructions.textContent = 'Select Reset to Play Again';
        return;
    }
    const roun = document.querySelector('#round');
    round.textContent = 'Round #' + roundNumber;
    let pick = 0;
    switch (input) {
        case '✊': pick = 0; break;
        case '🖐': pick = 1; break;
        case '✌️': pick = 2; break;
        default: {
            console.log('Not a valid input');
            computerScore++;
            return;
        }
    }
    let computerPickIndex = Math.floor(Math.random() * 3);
    let computerPick = options[computerPickIndex];
    const computerSelection = document.querySelector('#computer-selection');
    computerSelection.textContent = 'Computer selects ' + computerPick;
    console.log('Computer picks : ' + computerPick);
    const roundStatus = document.querySelector('#round-status');
    if (computerPickIndex == pick) {
        console.log("A tie");
        roundStatus.textContent = '🏁 A TIE';
    }else if(input==='✊'){
        if(computerPick === '🖐'){
            console.log('Computer wins!');
            roundStatus.textContent = '💻 wins!';
            computerScore++;
        }else if(computerPick === '✌️'){
            console.log('You win!');
            roundStatus.textContent = '👨 win!';
            userScore++;
        }
    }else if(input === '🖐'){
        if(computerPick === '✌️'){
            console.log('Computer wins!');
            roundStatus.textContent = '💻 wins!';
            computerScore++;
        }else if(computerPick === '✊'){
            console.log('You win!');
            roundStatus.textContent = '👨 win!';
            userScore++;
        }
    }else{
        if(computerPick === '✊'){
            console.log('Computer wins!');
            roundStatus.textContent = '💻 wins!';
            computerScore++;
        }else if(computerPick === '🖐'){
            console.log('You win!');
            roundStatus.textContent = '👨 win!';
            userScore++;
        }
    }
    console.log('computer : ' + computerScore + ' user : ' + userScore);
    document.querySelector('#user-score').textContent = 'Your Score : ' + userScore;
    document.querySelector('#computer-score').textContent = 'Computer Score : ' + computerScore;
    if(userScore>computerScore){
        document.querySelector('#user-score').style.backgroundColor ="#00A8CC";
        document.querySelector('#computer-score').style.backgroundColor ="#ffffff";
    }else if(userScore<computerScore){
        document.querySelector('#user-score').style.backgroundColor ="#ffffff";
        document.querySelector('#computer-score').style.backgroundColor ="#00A8CC";
    }else{
        document.querySelector('#user-score').style.backgroundColor ="#00A8CC";
        document.querySelector('#computer-score').style.backgroundColor ="#00A8CC";
    }
}

function game() {

    console.log('Game starts');
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + i);
        console.log('-------------------');
        let userPickIndex = Math.floor(Math.random() * 3);
        console.log('User pick index : ' + userPickIndex);
        let userPick = options[userPickIndex];
        console.log('User Picked : ' + userPick);
        playGround(userPick);
    }
    
}



const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (roundNumber < 6) {
            const playerSelection = document.querySelector('#player-selection');
            playerSelection.textContent = 'Player selects ' + btn.textContent;
            playGround(btn.textContent);
            if(roundNumber == 5){
                const round = document.querySelector('#round');
            if (userScore > computerScore) {
                round.textContent = 'You win ! Congratulations'

                console.log('User wins!');
            } else if (userScore < computerScore) {
                console.log('Computer wins!');
                round.textContent = 'Oops ! Computer wins'
            } else {
                round.textContent = 'A tie!'
                console.log('A tie!!');
            }

            }
        }

    })
});

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', (e) => {
    location.reload();
    console.log('Reset');
});