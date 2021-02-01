let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sciss_div = document.getElementById("s");
const reset_div = document.getElementById("reset_button");
var audio = new Audio('176727__yottasounds__pop.wav');
var welcome = new Audio('welcome.wav');

function getComputerChoice(){
    const choices = ['r','p','s'];
    const choice = (Math.floor(Math.random() * 3));
    return choices[choice];

}

function convertToWord(letter){
    switch(letter){
        case "r":
            letter = "Rock";
            return letter;
        case "p":
            letter = "Paper";
            return letter;
        case "s":
            letter = "Scissors";
            return letter;

    }

}

function win(userChoice, compchoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = convertToWord(userChoice) + "  beats " + convertToWord(compchoice) + ". You win 😎"
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow');},400);
}

function lose(userChoice, compchoice){
    comScore ++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = convertToWord(compchoice) + "  beats " + convertToWord(userChoice) + ". You lose 😥"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow');},400);
}




function draw(userChoice, compchoice){    
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = "Its Draw"
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow');},400);
}
function reset(){
    userScore = 0;
    comScore = 0;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = "Welcome! 🔥";

}

function game(userChoice){
    const compchoice = getComputerChoice();
    switch(userChoice + compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , compchoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , compchoice);
            break;

        case "rr":     
        case "pp":
        case "ss":
            draw(userChoice , compchoice);
            break;

    }
}



function main(){
    rock_div.addEventListener('click',function(){
        game("r");
        audio.play();

    })
    paper_div.addEventListener('click',function(){
        game("p");
        audio.play();
    })
    sciss_div.addEventListener('click',function(){
        game("s");
        audio.play();
    })
    reset_div.addEventListener('click',function(){
        reset();
        welcome.play();
    })

}
main();






