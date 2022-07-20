let color = 'black';

function adjustBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size 
    for(let i =  0; i<amount; i++) {
        let square = document.createElement('div')
        square.addEventListener("mouseover", squareColor)
        square.style.backgroundColor = 'white'
        board.insertAdjacentElement('beforeend',square)
    }
}

adjustBoard(16)

function changeSize(input) {
        if(input >= 2 && input <= 100) {
        adjustBoard(input); 
    } else {
        console.log('too many squares')
    }

}

function squareColor() {
    this.style.backgroundColor= color;
}

function changeColor(choice) {
    color = choice;
}