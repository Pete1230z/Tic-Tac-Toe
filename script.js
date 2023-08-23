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

cellElements.forEach(cell => {
	cell.addEventListener('click', playerMove)
});

function playerMove(e) {
	const cell = e.target;
	cell.className = 'cell x';
	console.log(cell)
}
//StartGame
//placeMark
//Check for win
//Check for draw
//Switch turns




