let color = 'black';
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;

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

adjustBoard(16)

function changeSize(input) {
        if(input >= 2 && input <= 100) {
        adjustBoard(input); 
    } else {
        alert('Invalid grid size')
    }

}

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

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value')

slider.addEventListener('input', () => {
    let val = document.getElementById('slider').value;
    screenVal.textContent = 'Grid Size: ' + val + 'x' + val; })


