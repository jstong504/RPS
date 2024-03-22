//stats line
let stats = {
    wins: 0,
    losses: 0,
    ties: 0,
    choiceHistory: {
        rock: 0,
        paper: 0,
        scissors: 0
    }
}





let continueFlag = true;

while (continueFlag) {

    //use choice input
    let userChoice = prompt("Rock, Paper, or Scissors?");

    console.log({userChoice});
    if (userChoice === "Rock") {
        stats.choiceHistory.rock = stats.choiceHistory.rock + 1;
    } else if (userChoice === "Paper") {
        stats.choiceHistory.paper = stats.choiceHistory.paper + 1;
    } else if (userChoice === "Scissors") {
        stats.choiceHistory.scissors = stats.choiceHistory.scissors + 1;
    }

    //generate computer choice
    let rngChoice = Math.floor(Math.random() * 3);

    console.log(rngChoice);

    let choices = ["Rock", "Paper", "Scissors"];

    let cpuChoice = choices[rngChoice];

    console.log(cpuChoice);


    // validate choice
    if (!choices.includes(userChoice)) {
        window.alert("Try Again")
        //userChoice = prompt("Rock, Paper, Scissors?");
        //console.log(userChoice);
    } else {

        //comparison
        //prompt feedback win or lose
        //rock beats scissors
        if (userChoice === "Rock" && cpuChoice === "Scissors") {
            window.alert("You Win!");
            stats.wins = stats.wins + 1;
            //scissors beats paper
        } else if (userChoice === "Scissors" && cpuChoice === "Paper") {
            window.alert("You Win!");
            stats.wins = stats.wins + 1;
            //paper beats rock
        } else if (userChoice === "Paper" && cpuChoice === "Rock") {
            window.alert("You Win!");
            stats.wins = stats.wins + 1;
            //issa tie
        } else if (userChoice === cpuChoice) {
            window.alert("Draw!");
            stats.ties = stats.ties + 1;
        } else {
            window.alert("You Lose...");
            stats.losses = stats.losses + 1;
        }

        continueFlag = confirm("Continue?")
    }
}

console.log(stats);
window.alert(`Wins ${stats.wins}\nLosses ${stats.losses}\nTies ${stats.ties}\nRock ${stats.choiceHistory.rock}\n
Paper ${stats.choiceHistory.paper}\nScissors ${stats.choiceHistory.scissors} `);

//prompt feedback win or lose
//replay

//track wins / ties / losses
//track stats for choices use inputed









