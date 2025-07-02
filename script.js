let ventiSlime = 0;
let panda = 0;
let miniCreeper = 0;
let blueSlime = 0;
let killerRabbit = 0;

let questions = document.querySelectorAll('.question');
let resultDiv = document.querySelector('.result');

// hide all the questions except the first one
for (let i = 0; i < questions.length; i++) {
    if (i === 0) {
        questions[i].style. display = "flex";
    } else {
        questions[i].style.display = "none";
    }
}

// Hide result at the start
resultDiv.style.display = "none";

function showResult() {
    let topCharacter = "panda";
    let maxScore = panda;
    if (ventiSlime > maxScore) {
        topCharacter = "VentiSlime";
        maxScore = ventiSlime;
    }
    if (miniCreeper > maxScore) {
        topCharacter = "miniCreeper";
        maxScore = miniCreeper;
    }
    if (blueSlime > maxScore) {
        topCharacter = "BlueSlime";
        maxScore = blueSlime;
    }
    if (killerRabbit > maxScore) {
        topCharacter = "KillerRabbit";
        maxScore = killerRabbit;

    }
    resultDiv.textContent = "You are: " + topCharacter + "!";
    resultDiv.style.display = "block";
}













// For each question, add listeners to its buttons
for (let q = 0; q < questions.length; q++) {
    let buttons = questions[q].querySelectorAll('button');
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].addEventListener('click', function() {
            // Score
            let data = buttons[b].getAttribute("data-character");
            let characters = data.split(",");
            for (let c = 0; c < characters.length; c++) {
                let character = characters[c].trim();
                if (character === "ventiSlime") ventiSlime++;
                if (character === "grandeSlime") panda++;
                if (character === "miniSlime") miniCreeper++;
                if (character === "blueSlime") blueSlime++;
                if (character === "killerRabbit") killerRabbit++;
            }
            // Hide this question
            questions[q].style.display = "none";
            // Show next question or result
            if (q + 1 < questions.length) {
                questions[q + 1].style.display = "flex";
            } else {
                showResult();
            }
        });
    }
}
