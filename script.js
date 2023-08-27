const playerClassX = 'x';
const playerClassCircle = 'circle';
const winningCombinations = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]');
//Must be let instead of const so that the value can change
let circleTurn = false;
const board = document.getElementById('board');

//Call function here so that board starts with class X
restartGame();

//The name of this function does not matter, it is not actually accessing cell variable
cellElements.forEach(pen => {
	pen.addEventListener('click', playerMove)
});

function restartGame() {
}

function gameWinner() {
    if(winningCombinations.some(playerClassX) === true) {
		const winner = document.getElementById('winning-message');
		winner.style.visibility = 'visible';
		console.log(gameWinner())
	}
}

function playerMove(e) {
	const cell = e.target;
	const currentClass = circleTurn ? playerClassCircle : playerClassX;
	placeMark(cell, currentClass)
	swapTurns();
	setBoard();
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function swapTurns() {
	circleTurn = !circleTurn;
}

function setBoard() {
	board.classList.remove(playerClassCircle, playerClassX);
	if(circleTurn) {
		board.classList.add(playerClassCircle)
	} else {
	    board.classList.add(playerClassX)
	}
	console.log(board);
}


//StartGame
//placeMark DONE
//Check for win
//Check for draw
//Switch turns DONE




