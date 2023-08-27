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
const winningMessage = document.getElementById('winningMessage');
const board = document.getElementById('board');

//Must be let instead of const so that the value can change. Left equal to nothing so that we can set it to false in startGame
let circleTurn

startGame();

function startGame() {
    circleTurn = false;
	//The name of this function does not matter, it is not actually accessing cell variable
    cellElements.forEach(pen => {
	pen.classList.remove(playerClassCircle);
	pen.classList.remove(playerClassX)
	pen.addEventListener('click', playerMove)
});
    winningMessage.classList.remove('show');
	//setBoard here so that at start the game knows who is going first
	setBoard();
}

function playerMove(e) {
	const cell = e.target;
	const currentClass = circleTurn ? playerClassCircle : playerClassX;
	placeMark(cell, currentClass)
	if(checkWin(currentClass)) {
       alert('Congratulations ${currentClass} won!')
	}
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
}

function checkWin(currentClass) {
	return winningCombinations.some(combinations => {
		return combinations.every(cellIndex => {
			return cellElements[cellIndex].classList.contains(currentClass);
		})
	})
}


//StartGame DONE
//placeMark DONE
//Check for win
//Check for draw
//Switch turns DONE




