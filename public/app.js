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

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

var x = true;
var o = false;

function myFunction(btnid) {
var button = document.getElementById(btnid);

    if (x) {
        button.value = "X";
        button.disabled = true; // Disable the button after setting the value
        conditionCheck("X");
        //  updateParagraph("X");
        x = false;
        o = true;
    } else {
        button.value = "O";
        button.disabled = true; // Disable the button after setting the value
        conditionCheck("O");
        //  updateParagraph("O");
        x = true;
        o = false;
    }
}

function conditionCheck(val) {
    var r00 = document.getElementById("r00");
    var r01 = document.getElementById("r01");
    var r02 = document.getElementById("r02");
    var r10 = document.getElementById("r10");
    var r11 = document.getElementById("r11");
    var r12 = document.getElementById("r12");
    var r20 = document.getElementById("r20");
    var r21 = document.getElementById("r21");
    var r22 = document.getElementById("r22");
    var buttons = [
        [r00, r01, r02],
        [r10, r11, r12],
        [r20, r21, r22],
        [r00, r10, r20],
        [r01, r11, r21],
        [r02, r12, r22],
        [r00, r11, r22],
        [r02, r11, r20]
    ];

    for (var i = 0; i < buttons.length; i++) {
        var [btn1, btn2, btn3] = buttons[i];
        if (btn1.value === btn2.value && btn2.value === btn3.value) {
            if (btn1.value === "X") {
                updateParagraph("N"); // Player X wins
            } else if (btn1.value === "O") {
                updateParagraph("M"); // Player O wins
            }
            return; // Exit the loop if we have a winner
        }
        else{
            updateParagraph(val); 
        }
    }

    // Check for a draw
    var draw = true;
    for (var i = 0; i < buttons.length; i++) {
        for (var j = 0; j < buttons[i].length; j++) {
            if (buttons[i][j].value === "") {
                draw = false;
                break;
            }
        }
    }

    if (draw) {
        updateParagraph("D"); // It's a draw
    }
}


function updateParagraph(element) {
    var el = element;
    var paragraph = document.getElementById("p1");
    var reset = document.getElementById("reset");

    if (el === "X") {
        paragraph.textContent = "Player O's turn";
    } else if (el === "O") {
        paragraph.textContent = "Player X's turn";
    } else if (el === "N") {
        paragraph.textContent = "Player X won";
        reset.disabled = false;
    } else if (el === "M") {
        paragraph.textContent = "Player O won";
        reset.disabled = false;
    }
}
