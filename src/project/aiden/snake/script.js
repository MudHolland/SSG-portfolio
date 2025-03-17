const gameArea = document.getElementById('gameArea');
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;
const snakeSize = 20;

// Snake is an array of segments (starting with just the head)
let snake = [
    {
        x: gameWidth / 2 - snakeSize / 2,
        y: gameHeight / 2 - snakeSize / 2,
        element: document.createElement('div')
    }
];

// Food starting position (random)
let food = {
    x: Math.floor(Math.random() * (gameWidth / snakeSize)) * snakeSize,
    y: Math.floor(Math.random() * (gameHeight / snakeSize)) * snakeSize,
    element: document.createElement('div')
};

// Mouse position
let mouseX = snake[0].x;
let mouseY = snake[0].y;

// Set up initial snake head
snake[0].element.className = 'snake';
snake[0].element.style.left = snake[0].x + 'px';
snake[0].element.style.top = snake[0].y + 'px';
gameArea.appendChild(snake[0].element);

// Set up food
food.element.className = 'food';
food.element.style.left = food.x + 'px';
food.element.style.top = food.y + 'px';
gameArea.appendChild(food.element);

// Update mouse position when it moves
gameArea.addEventListener('mousemove', (event) => {
    const rect = gameArea.getBoundingClientRect();
    mouseX = event.clientX - rect.left - snakeSize / 2;
    mouseY = event.clientY - rect.top - snakeSize / 2;
    mouseX = Math.max(0, Math.min(mouseX, gameWidth - snakeSize));
    mouseY = Math.max(0, Math.min(mouseY, gameHeight - snakeSize));
});

// Reset the game
function resetGame() {
    snake.forEach(segment => gameArea.removeChild(segment.element));
    snake = [
        {
            x: gameWidth / 2 - snakeSize / 2,
            y: gameHeight / 2 - snakeSize / 2,
            element: document.createElement('div')
        }
    ];
    snake[0].element.className = 'snake';
    snake[0].element.style.left = snake[0].x + 'px';
    snake[0].element.style.top = snake[0].y + 'px';
    gameArea.appendChild(snake[0].element);
    food.x = Math.floor(Math.random() * (gameWidth / snakeSize)) * snakeSize;
    food.y = Math.floor(Math.random() * (gameHeight / snakeSize)) * snakeSize;
    food.element.style.left = food.x + 'px';
    food.element.style.top = food.y + 'px';
}

// Move snake toward mouse and update tail
function updateGame() {
    // Store previous positions for all segments
    const prevPositions = snake.map(segment => ({ x: segment.x, y: segment.y }));

    // Move head toward mouse slowly
    const speed = 50; // Higher number = slower
    snake[0].x += (mouseX - snake[0].x) / speed;
    snake[0].y += (mouseY - snake[0].y) / speed;

    // Keep head inside game area
    snake[0].x = Math.max(0, Math.min(snake[0].x, gameWidth - snakeSize));
    snake[0].y = Math.max(0, Math.min(snake[0].y, gameHeight - snakeSize));

    // Update head position
    snake[0].element.style.left = snake[0].x + 'px';
    snake[0].element.style.top = snake[0].y + 'px';

    // Move each tail segment to the previous position of the segment in front
    for (let i = 1; i < snake.length; i++) {
        snake[i].x = prevPositions[i - 1].x;
        snake[i].y = prevPositions[i - 1].y;
        snake[i].element.style.left = snake[i].x + 'px';
        snake[i].element.style.top = snake[i].y + 'px';
    }

    // Check if snake hits its own tail
    // for (let i = 1; i < snake.length; i++) {
    //     if (Math.abs(snake[0].x - snake[i].x) < snakeSize / 2 &&
    //         Math.abs(snake[0].y - snake[i].y) < snakeSize / 2) {
    //         alert("Oops! You hit your tail. Game restarting!");
    //         resetGame();
    //         return;
    //     }
    // }

    // Check if snake eats food
    if (Math.abs(snake[0].x - food.x) < snakeSize && Math.abs(snake[0].y - food.y) < snakeSize) {
        // Add a new segment at the last tail position
        const lastSegment = snake[snake.length - 1];
        const newSegment = {
            x: lastSegment.x,
            y: lastSegment.y,
            element: document.createElement('div')
        };
        newSegment.element.className = 'snake';
        newSegment.element.style.left = newSegment.x + 'px';
        newSegment.element.style.top = newSegment.y + 'px';
        gameArea.appendChild(newSegment.element);
        snake.push(newSegment);

        // Move food to a new random spot
        food.x = Math.floor(Math.random() * (gameWidth / snakeSize)) * snakeSize;
        food.y = Math.floor(Math.random() * (gameHeight / snakeSize)) * snakeSize;
        food.element.style.left = food.x + 'px';
        food.element.style.top = food.y + 'px';
    }

    // Keep the game running
    requestAnimationFrame(updateGame);
}

// Start the game
requestAnimationFrame(updateGame);