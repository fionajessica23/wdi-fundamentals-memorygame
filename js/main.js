console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
}

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
  	console.log("User flipped " + cards[cardId].rank);
  	console.log(cards[cardId].cardImage);
  	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}; 
};

var createBoard = function () {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

/*
document.getElementsByTagName('a')[0].setAttribute('href', 'http://newurl.com');
document.getElementsByTagName('a')[0].removeAttribute('id');

// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);

element.addEventListener('nameOfEvent', functionToRun);
*/