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

cellElements.forEach(cell => {
	cell.addEventListener('click', playerMove)
});

function playerMove(e) {
	const cell = e.target;
	const currentClass = circleTurn ? playerClassCircle : playerClassX;
	placeMark(cell, currentClass)
	swapTurns();
	console.log(cell)
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function swapTurns() {
	circleTurn = !circleTurn;
}
//StartGame
//placeMark DONE
//Check for win
//Check for draw
//Switch turns DONE




