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
const winningMessage = document.querySelector('[data-winning-message-text]')
//Must be let instead of const so that the value can change
let circleTurn = false;
const board = document.getElementById('board');

//The name of this function does not matter, it is not actually accessing cell variable
cellElements.forEach(pen => {
	pen.addEventListener('click', playerMove)
});

//Not Complete
function gameWinner(currentClass) {
    return winningCombinations.some(combination => {
		return combination.every(cellIndex => {
			return cellElements[cellIndex].classList.contains(currentClass)
		});
	});
}

function playerMove(e) {
	const cell = e.target;
	const currentClass = circleTurn ? playerClassCircle : playerClassX;
	placeMark(cell, currentClass)
	if(gameWinner(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
	    endGame(true)
	} else {
		swapTurns();
	    setBoard();
	}
}

function endGame(draw) {
    if (draw) {
		winningMessage.innerText = 'It is a draw';
	} else {
		winningMessage.innerText = `Player with ${circleTurn ? playerClassCircle : playerClassX} wins!`
	}
    winningMessage.classList.add('show');
}

function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(playerClassX) || cell.classList.contains(playerClassCircle)
	})
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




