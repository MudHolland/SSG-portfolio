// Set up the game
const grid = document.getElementById('grid');
const hint = document.getElementById('hint');
const clicksDisplay = document.getElementById('clicks');
const highScoreDisplay = document.getElementById('highScore');
const resetButton = document.getElementById('resetHighScore');
const size = 15; // 15x15 grid
const totalSquares = size * size;
let treasure = Math.floor(Math.random() * totalSquares); // Random treasure spot (0-224)
let clicks = 0; // Track clicks
let highScore = localStorage.getItem('highScore') || Infinity; // Load high score or set to Infinity

// Show initial high score
if (highScore === Infinity) {
    highScoreDisplay.textContent = '-';
} else {
    highScoreDisplay.textContent = highScore;
}

// Create the grid
function createGrid() {
    grid.innerHTML = ''; // Clear the old grid
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.dataset.index = i; // Give each square a number
        square.addEventListener('click', checkSquare);
        grid.appendChild(square);
    }
}

// Start the game
createGrid();

// Reset high score
resetButton.addEventListener('click', function() {
    highScore = Infinity;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = '-';
    hint.textContent = "High score reset! Start hunting again!";
});

// Start a new game
function startNewGame() {
    clicks = 0;
    clicksDisplay.textContent = clicks;
    treasure = Math.floor(Math.random() * totalSquares); // New treasure spot
    hint.textContent = "Click a square to start hunting!";
    createGrid(); // Make a fresh grid
}

// Check when a square is clicked
function checkSquare(event) {
    clicks++; // Add 1 to clicks
    clicksDisplay.textContent = clicks; // Update display

    const clickedIndex = Number(event.target.dataset.index);
    
    // Convert indexes to row and column
    const clickedRow = Math.floor(clickedIndex / size);
    const clickedCol = clickedIndex % size;
    const treasureRow = Math.floor(treasure / size);
    const treasureCol = treasure % size;
    
    // Calculate distance in rows and columns
    const rowDistance = Math.abs(clickedRow - treasureRow);
    const colDistance = Math.abs(clickedCol - treasureCol);
    const distance = Math.max(rowDistance, colDistance); // Use the bigger distance

    if (clickedIndex === treasure) {
        event.target.style.backgroundColor = 'red'; // Treasure is yellow!
        let message = `You found the treasure in ${clicks} clicks! Great job, Aiden!`;
        
        // Update high score if this is better (fewer clicks)
        if (clicks < highScore) {
            highScore = clicks;
            localStorage.setItem('highScore', highScore);
            highScoreDisplay.textContent = highScore;
            message += " New high score!";
        }
        
        // Show the treasure for a moment, then popup and reset
        hint.textContent = message;
        setTimeout(function() {
            alert(message);
            startNewGame();
        }, 500); // Wait 0.5 seconds (500 milliseconds)
    } else if (distance <= 2) {
        hint.textContent = "Warm... getting closer!";
        event.target.style.backgroundColor = 'orange';
    } else if (distance <= 4) {
        hint.textContent = "Warm... getting closer!";
        event.target.style.backgroundColor = 'yellow';
    } else if (distance <= 6) {
        hint.textContent = "Warm... getting closer!";
        event.target.style.backgroundColor = 'green';
    } else if (distance <= 8) {
        hint.textContent = "Warm... getting closer!";
        event.target.style.backgroundColor = 'blue';
    } else if (distance <= 10) {
        hint.textContent = "Warm... getting closer!";
        event.target.style.backgroundColor = 'indigo';
    } else {
        hint.textContent = "Cold... keep looking!";
        event.target.style.backgroundColor = 'violet';
    }
}