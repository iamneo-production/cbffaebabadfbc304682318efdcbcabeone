// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check if a player has won
const checkWin = (player) => {
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] === player && cells[b] === player && cells[c] === player) {
            return true;
        }
    }
    return false;
};

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Check if the cell is empty and the game is still ongoing
    if (cells[index] === '' && result.textContent === '') {
        // Update the cell with the current player's symbol
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;

        // Check if the current player has won
        if (checkWin(currentPlayer)) {
            result.textContent = `${currentPlayer} wins!`;
            // Disable all buttons after a win
            btns.forEach((btn) => btn.disabled = true);
        } else {
            // Switch to the next player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            // Update the result element to show the current player's turn
            result.textContent = `Current player: ${currentPlayer}`;
        }
    }
};

// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Clear cell text content
    btns.forEach((btn) => btn.textContent = '');

    // Enable all buttons
    btns.forEach((btn) => btn.disabled = false);

    // Clear the result message
    result.textContent = 'Current player: X';
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
