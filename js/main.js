// There is only 8 way a player can win
// (1-2-3) (4,5,6) (7,8,9) (1,4,7) ....
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
$('#0').on('click', function() {
  boxValues[0] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#1').on('click', function() {
  boxValues[1] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#2').on('click', function() {
  boxValues[2] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#3').on('click', function() {
  boxValues[3] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#4').on('click', function() {
  boxValues[4] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#5').on('click', function() {
  boxValues[5] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#6').on('click', function() {
  boxValues[6] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#7').on('click', function() {
  boxValues[7] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

$('#8').on('click', function() {
  boxValues[8] = currentPlayer;
	if (currentPlayer === true) {
		$(this).addClass("active-red");
	} else {
		$(this).addClass("active-blue");
	}
  currentPlayer = !currentPlayer;
});

// Create loop that finds if each of the boxes equals a win

const game = function() {
	/// ??
	console.log(wins[2]);
};

// $("#0").on('click', function() {
// 	$(this).addClass("active-red");
// 	// boxValues[0] =
// });
//
// $("#1").on('click', function() {
// 	$(this).addClass("active-blue");
// });
//
// $("#2").on('click', function() {
// 	$(this).addClass("active-red");
// });



}); // document doc ready
