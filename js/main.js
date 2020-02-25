// There is only 8 way a player can win
// (0-1-2) (3,4,5) (6,7,8) (0,3,6) (1,4,7) (2,5,8) (0,4,8) (2,4,6) ....
// Create a series of if statements that test if the current player has won
// Player 1 starts picks a sqaure red
// Player 2 starts with blue
// Players take turns until one of the win condtions are true or board is full.

// Define the box values

$(document).ready(function() {

// Define Player
let currentPlayer = true;

// Define box values
const boxValues = ["","","","","","","","",""];

// Define win condtions
const wins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

// updating the values of the boxValues
for (let i = 0; i < 9; i++) {
	console.log(i);
	const button = $(`#${i}`);

	button.on('click', function() {
		console.log("clicked", i);

    if (boxValues[i] === "") {
			if (currentPlayer === true) {
				button.addClass("active-red");
				console.log('X played');
				boxValues[i] = 'x'
			} else {
				button.addClass("active-blue");
				console.log('O played');
				boxValues[i] = 'o'
			}
      isGameOver()
			currentPlayer = !currentPlayer;
		}

	});

	}

	// Check if the player has won
	// There is only 8 way a player can win
	// (0-1-2) (3,4,5) (6,7,8) (0,3,6) (1,4,7) (2,5,8) (0,4,8) (2,4,6)
	const isGameOver = function () {
		if (boxValues[0] === boxValues[1] && boxValues[2] === boxValues[1] & boxValues[0] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if(boxValues[3] === boxValues[4] && boxValues[5] === boxValues[3] & boxValues[3] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[6] === boxValues[7] && boxValues[8] === boxValues[6] & boxValues[6] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[0] === boxValues[3] && boxValues[6] === boxValues[0] & boxValues[0] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[1] === boxValues[4] && boxValues[7] === boxValues[1] & boxValues[1] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[2] === boxValues[5] && boxValues[8] === boxValues[2] & boxValues[2] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[0] === boxValues[4] && boxValues[8] === boxValues[0] & boxValues[0] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[2] === boxValues[4] && boxValues[6] === boxValues[2] & boxValues[2] !== "") {
			console.log("You have won");
			$(".game-status").html("<h4>You have won the game</h4>");
		} else if (boxValues[0] !== "" && // Finding if the game is a draw
		           boxValues[1] !== "" &&
							 boxValues[2] !== "" &&
							 boxValues[3] !== "" &&
					 		 boxValues[4] !== "" &&
					 		 boxValues[5] !== "" &&
							 boxValues[6] !== "" &&
					 		 boxValues[7] !== "" &&
					 		 boxValues[8] !== "") {
			console.log("This game is a draw");
			$(".game-status").html("<h4>This game is a draw</h4>");
		} else {
			console.log("Play again");
		}
	}

// Flip function
$(".thecard").on('click', function () {
	$(this).addClass("flip");
})

// Reset game function
$('#reset-button').click(function() {
    location.reload();
});
}); // document doc ready
