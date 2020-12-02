function createGrid(size) {
    for (i = 0; i < size*size; i++) {
        const canvas = document.querySelector('.canvas');

        const square = document.createElement('div');
        square.classList.add('square');
        canvas.appendChild(square);
    }
    document.querySelector('.canvas').style.gridTemplateColumns = 'repeat(' + size + ', auto)';
}

function draw() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
    });
}

function reset() {
    document.querySelector('.canvas').innerHTML = ''; 
    let size = prompt('Dimensions?');
    if (size > 0  && size <= 100) {
        createGrid(size);
        draw();
    }
    else {
        reset();
    }
}

// Initialize
createGrid(16);
draw();

// Reset
const button = document.querySelector('#clear');
button.addEventListener('click', reset);

