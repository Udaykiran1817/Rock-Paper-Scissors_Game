function ComputerMove(playerMove) {
    let computersymbol;
    const computermove = Math.random();


    if (computermove < 0.33 && computermove > 0) {
        computersymbol = "Rock";
    }

    else if (computermove < 0.64 && computermove > 0.33) {
        computersymbol = "Paper";
    }

    else if (computermove < 1 && computermove > 0.64) {
        computersymbol = "Scissors";
    }

    document.getElementById("text").innerHTML = (`You Picked ${playerMove}`);

    document.getElementById("text2").innerHTML = (`Computer Picked ${computersymbol}`);




    let result = document.getElementById("result");
    if (computersymbol === playerMove) {
        result = 'Tie';
    }
    else if ((computersymbol === 'Rock' && playerMove === 'Scissors') ||
        (computersymbol === 'Scissors' && playerMove === 'Paper') ||
        (computersymbol === 'Paper' && playerMove === 'Rock')) {
        result = 'Lose';
    }

    else {
        result = 'Win';
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `${result}`;

    if (result === "Win") {
        resultElement.style.color = "lightgreen";
    } else if (result === "Lose") {
        resultElement.style.color = "red";
    } else if (result === "Tie") {
        resultElement.style.color = "yellow";
    }

    console.log(`${result}`);


    document.getElementById("result").innerHTML = (`${result}`);



    let wins = parseInt(localStorage.getItem("wins")) || 0;
    let played = parseInt(localStorage.getItem("played")) || 0;
    let losses = parseInt(localStorage.getItem("losses")) || 0;
    let ties = parseInt(localStorage.getItem("ties")) || 0;


    if (result === 'Win') {
        wins = wins + 1;
        played++;

    }
    else if (result === 'Lose') {
        losses += 1;
        played++;

    }
    else if (result === 'Tie') {
        ties += 1;
        played++;

    }
    localStorage.setItem("wins", wins);
    localStorage.setItem("played", played);
    localStorage.setItem("losses", losses);
    localStorage.setItem("ties", ties);

    document.getElementById("scores").innerHTML = (`Wins: ${wins} | Losses: ${losses} | Ties: ${ties} | Matches Played: ${played}`);
}




function resetScore() {
    // Reset all score variables
    wins = 0;
    losses = 0;
    ties = 0;
    played = 0;

    // Clear from localStorage
    localStorage.clear();
    localStorage.removeItem("score");

    // Update the UI immediately
    document.getElementById("scores").innerText = `Wins: 0 | Losses: 0 | Ties: 0 | Matches Played: 0`;
    document.getElementById("text").innerText = "";
    document.getElementById("text2").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("result").style.color = "white";
}


