


function getDiceChoice(){
	var playerOneDiceChoice = prompt("Enter Dice Number");
	return playerOneDiceChoice;
}

function getDiceValue(playerOneDiceChoice){
	var diceRoll = Math.floor(Math.random()*playerOneDiceChoice)+1;
	return diceRoll;
}

function evaluate4SideDice(diceRoll, playerOneFurniture){
	if (diceRoll === 1){
	console.log ("You Win a Chair");
	playerOneFurniture.push("chair");
	}
	else if (diceRoll === 2){
		console.log("You Win a Sofa ");
		playerOneFurniture.push("sofa");
	}
	else if (diceRoll === 3){
		console.log("You Win a Table");
		playerOneFurniture.push("table");
	}
	else if (diceRoll === 4){
		console.log("You Lose a Piece of Furniture");
		playerOneFurniture.slice(0,1);
	}
	return playerOneFurniture;
}

function evaluate6SideDice(diceRoll, playerOneFurniture){
	if (diceRoll === 1){
	console.log ("You Win a Chair");
	}
	else if (diceRoll === 2){
		console.log("You Win a Stove");
	}
	else if (diceRoll === 3){
		console.log("You Win a Table");
	}
	else if (diceRoll === 4){
		console.log("You Win a Fridge");
	}
	else if (diceRoll === 5){
		console.log("You Win a Microwave");
	}

	else if (diceRoll === 6){
		console.log("You Lose a Piece of Furniture");
	}

}

function evaluate8SideDice(diceRoll){
	if (diceRoll === 1){
		var countSofa = countSofa++;
		var countSofa = countSofa--;
	console.log("You Win a Sofa");
	}
	else if (diceRoll === 2){
		var countCoffeetable = countCoffeetable++;
		var countCoffeetable = countCoffeetable--;
		console.log("You Win a Coffee Table");
	}
	else if (diceRoll === 3){
		var countloveSeat = countloveSeat++;
		var countloveSeat = countloveSeat--;
		console.log("You Win a Love Seat");
	}
	else if (diceRoll === 4){
		var countTelevision = countTelevision++;
		var countTelevision = countTelevision--;
		console.log("You Win a Television");
	}
	else if (diceRoll === 5){
		var countBookcase = countBookcase++;
		var countBookcase = countBookcase--;
		console.log("You Win a Book Case");
	}
	else if (diceRoll === 6){
		var countEndtable = countEndTable++;
		var countEndtable = countEndTable--;
		console.log("You Win an End Table");
	}
	else if (diceRoll === 7){
		var countRug = countRug++;
		var countRug = countRug --;
		console.log("You Win a Rug");
	}
	else if (diceRoll === 8){
		console.log("You Lose a Piece of Furniture");
	}
	
}

function evaluate10SideDice(diceRoll, countPicture){
	if (diceRoll %2===0){
	var countPicture =  countPicture++;
	console.log ("You Win a Picture");
	}
	else if (diceRoll === 1,3,5,7,9){
		var countPicture = countPicture --;
		console.log("You Lose a Picture");
	}
}
function evaluate12SideDice(diceRoll, countFlowers){
	if (diceRoll %2 === 0){
	countFlowers++;
	console.log ("You Win Flowers");
	}
	else if (diceRoll === 1,3,5,7,9,11){
		var countFlowers = countFlowers--;
		console.log("You Lose Flowers");
	}
}	
function evaluate20SideDice(diceRoll, countBook){
	if (diceRoll %2 === 0){
		var countBook = countBook++;
		console.log ("You Win a Book");
	}
	else if (diceRoll === 1,3,5,7,9,11,13,15,17,19){
		var countBook = countBook --;
		console.log("You Lose a Book");
	}
}
function countFurniture(){
	var countPlayerFurniture = prompt ("Count Total Furniture and Accessories");
	return countPlayerFurniture;
}

function runGame(){
	var playerOneFurniture = [];
	var countPicture = 0
	var countFlowers = 0
	var countBook = 0
	var countRug = 0
	var countEndtable = 0
	var countBookcase = 0
	var countTelevision = 0
	var countLoveseat = 0
	var countCoffeetable = 0
	var countsofa = 0
	var Microwave = 0
	var Fridge = 0
	var Table = 0
	var Stove = 0
	var Chair = 0



	var diceChoice = getDiceChoice();
	if(diceChoice == 3){
		var diceRoll = getDiceValue(diceChoice);
		playerOneFurniture = evaluate4SideDice(diceRoll, playerOneFurniture);
	}
		
	
}
runGame();





 



 



