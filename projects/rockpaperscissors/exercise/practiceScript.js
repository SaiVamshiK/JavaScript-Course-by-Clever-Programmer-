/*
function findRandom(arr){
    let randomIdx = Math.floor(Math.random()*arr.length)
    return arr[randomIdx]
}
let arr = ["dhoni","virat","rohit","rahul"]
console.log(findRandom(arr))
*/



let myScore = 0;
let computerScore = 0;
let allBtns = document.querySelectorAll('.rpsButton')
let playerScoreDiv = document.getElementById('player-score')
let computerScoreDiv = document.getElementById('computer-score')
let handsDiv = document.getElementById('hands')
let resultsDiv = document.getElementById('result')
let clearBtn = document.getElementById('endGameButton')


let computerOptions = ['Rock','Paper','Scissors']
function selectRandom(arr){
    let randomIdx = Math.floor(Math.random()*arr.length)
    return arr[randomIdx]
}
function isWin(userChoice,computerChoice){
    if(userChoice === 'Rock'){
        if(computerChoice === 'Rock'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 0;
        }else if(computerChoice === 'Scissors'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 1;
        }else{
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return -1;
        }
    }else if(userChoice === 'Paper'){
        if(computerChoice === 'Paper'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 0;
        }else if(computerChoice === 'Rock'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 1;
        }else{
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return -1;
        }
    }else{
        if(computerChoice === 'Scissors'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 0;
        }else if(computerChoice === 'Paper'){
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return 1;
        }else{
            handsDiv.innerText = `👱 ${userChoice} vs 🤖 ${computerChoice}`
            return -1;
        }
    }
}
for(let btn of allBtns){
    btn.onclick = () => {
        let computerChoice = selectRandom(computerOptions)
        let userChoice = btn.value
        let result = isWin(userChoice,computerChoice)
        if(result === 1){
            resultsDiv.innerHTML = 'You Win'
            myScore++;
            computerScore--;
            playerScoreDiv.innerText = `Your Score: ${myScore}`
            computerScoreDiv.innerText = `Computer Score: ${computerScore}`
        }else if(result === -1){
            resultsDiv.innerHTML = 'You Lose'
            myScore--;
            computerScore++;
            playerScoreDiv.innerText = `Your Score: ${myScore}`
            computerScoreDiv.innerText = `Computer Score: ${computerScore}`
        }else{
            resultsDiv.innerHTML = 'Its a tie'
            playerScoreDiv.innerText = `Your Score: ${myScore}`
            computerScoreDiv.innerText = `Computer Score: ${computerScore}`
        }
    }
}

clearBtn.onclick = () => {
    myScore = 0;
    computerScore = 0
    resultsDiv.innerHTML = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
    computerScoreDiv.innerText = ''
}