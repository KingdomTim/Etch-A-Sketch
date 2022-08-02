// Default mouse color is set to black

let color = 'black';

// Allows us to paint only while the mouse button is clicked  

let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;

// creates grid of empty white boxes/divs depending on the size the board is set to
// Anytime the mouse hovers over a box/div in the grid, it will change to the specified color

function adjustBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size 
    for(let i =  0; i<amount; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', squareColor)
        square.style.backgroundColor = 'white'
        board.insertAdjacentElement('beforeend',square)
    }
}

// Default grid size is set to 16x16

adjustBoard(16)

// Alters grid size to a minimum of 2x2 or maximum of 100x100

function changeSize(input) {
        if(input >= 2 && input <= 100) {
        adjustBoard(input); 
    } else {
        alert('Invalid grid size')
    }
}


// Determines what color the mouse is set to, depending on button clicked
// If user selects rainbow color, each color will be randomized upon hovering over a different div within the grid

function squareColor() {
    if (mouseDown) {
        if (color === "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
        } else {
        this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

// Removes all divs that have been colored in and returns entire grid to white

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

// Adds slider and meter to allow user to alter grid to the desired size

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value')

slider.addEventListener('input', () => {
    let val = document.getElementById('slider').value;
    screenVal.textContent = 'Grid Size: ' + val + 'x' + val; })


