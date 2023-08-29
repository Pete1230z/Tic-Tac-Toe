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
console.log(cellElements)
const winningPopUp = document.getElementById('winningMessage');
const winningMessage = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restart-game');
const board = document.getElementById('board');

//Must be let instead of const so that the value can change. Left equal to nothing so that we can set it to false in startGame
let circleTurn

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
	//The name of this function does not matter, it is not actually accessing cell variable
    cellElements.forEach(pen => {
	pen.classList.remove(playerClassCircle);
	pen.classList.remove(playerClassX)
	pen.addEventListener('click', playerMove)
});
    winningPopUp.classList.remove('show');
	//setBoard here so that at start the game knows who is going first
	setBoard();
}

function playerMove(e) {
	const cell = e.target;
	const currentClass = circleTurn ? playerClassCircle : playerClassX;
	placeMark(cell, currentClass)
	if(checkWin(currentClass)) {
	   winningPopUp.classList.add('show');
	   winningMessage.innerText = `Congratulations ${currentClass} won!`
	} else if(isDraw()) {
	   winningPopUp.classList.add('show');
	   winningMessage.innerText = 'It is a Draw!'
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

//The function iterates through each combination in winningCombinations and checks if every cell index in a combination contains the currentClass provided. If all cell indexes in a combination have the currentClass, the function returns true, indicating that the current player with the given class has won.
function checkWin(currentClass) {
	return winningCombinations.some(combinations => {
		return combinations.every(cellIndex => {
			return cellElements[cellIndex].classList.contains(currentClass);
		})
	})
}

function isDraw() {
	const cellElementsArray = [...cellElements];
    return cellElementsArray.every(pen => {
		return pen.classList.contains(playerClassCircle) || pen.classList.contains(playerClassX);
	})
}



//StartGame DONE
//placeMark DONE
//Check for win
//Check for draw
//Switch turns DONE




