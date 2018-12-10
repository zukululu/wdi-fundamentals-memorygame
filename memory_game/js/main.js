//variables
var cards = 
[
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

//functions
var checkForMatch = function() 
{
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 2) 
	{
		if(cardsInPlay[0] === cardsInPlay[1]) 
		{
				alert('You found a match!');
		} else 
		{
			alert('Sorry, try again.'); 
		}
	}
}

var flipCard = function() 
{
	var cardId = this.getAttribute('data-id');
	console.log("You flipped over " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);	
	console.log(cards[cardId].cardImage);
	checkForMatch();
}

var createBoard = function() 
{
	for(var i = 0; i<cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
