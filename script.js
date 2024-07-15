// script.js
let score = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const correctAnswer = num1 + num2;
    const options = [correctAnswer, correctAnswer + getRandomInt(1, 5), correctAnswer - getRandomInt(1, 5), correctAnswer + getRandomInt(6, 10)];

    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [options[i], options[j]] = [options[j], options[i]];
    }

    return { num1, num2, correctAnswer, options };
}

function startGame() {
    score = 0;
    document.getElementById('score').innerText = `Xal hesabı: ${score}`;
    document.getElementById('restart').style.display = 'none';
    generateAndDisplayQuestion();
}

function generateAndDisplayQuestion() {
    const { num1, num2, correctAnswer, options } = generateQuestion();

    document.getElementById('question').innerText = `Sual: ${num1} + ${num2} = ?`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, correctAnswer);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score += 10;
        document.getElementById('score').innerText = `Xal hesabı: ${score}`;
        generateAndDisplayQuestion();
    } else {
        document.getElementById('restart').style.display = 'block';
        alert('Səhv cavab! Oyun bitdi.');
    }
}

// Start the game when the page loads
window.onload = startGame;
