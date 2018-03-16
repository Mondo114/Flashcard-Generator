
// Console log each .js file to make sure they're working, then figure out how to loop through an array of questions

var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var round = 0;
console.log("\nGreetings and welcome to a game from a long time ago in a galaxy far, far away...it's the Star Wars flashcard question game! Please use all lowercase letters in your answers. May the force be with you.\n");
var clozeObjs = [{
	fullText: "the original name for Star Wars: a new hope was star wars.",
	cloze: "star wars"
},
{
	fullText: "the Millennium Falcon is the ship that made the Kessel Run in less than twelve parsecs.",
	cloze: "parsecs"
},
{
	fullText: "the sith are the polar opposite of the jedi.",
	cloze: "sith"
},
{
	fullText: "Chewbacca is a member of the wookie species.",
	cloze: "wookie"
},
{
	fullText: "TK421 is the code of the stormtrooper who isn't at his post in Star Wars: A New Hope.",
	cloze: "421"
},
{
	fullText: "the star wars ride at Disneyland is called star tours.",
	cloze: "star tours"
},
{
	fullText: "revenge of the jedi was the original name for return of the jedi before it hit theaters.",
	cloze: "revenge"
},
{
	fullText: "in the year 1997, the original trilogy came out in theaters as a special edition.",
	cloze: "1997"
},
{
	fullText: "when Obi Wan Kenobi said 'that's no moon', he was referring to the space station weapon known as the death star.",
	cloze: "death star"
},
{
	fullText: "Han Solo gets frozen in carbonite at the end of the Empire Strikes Back.",
	cloze: "carbonite"
}
];

function makeClozeCards(questions) {
	var currentCard;
	var deck = [];
	for(var i = 0; i < questions.length; i++) {
		currentCard = new ClozeCard(questions[i].fullText, questions[i].cloze);
		deck.push(currentCard);
	}
	return deck;
}

// var question1Cloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
// console.log(question1Cloze);
var currentDeck = makeClozeCards(clozeObjs);
// console.log("current deck");
// console.log(currentDeck);
function startGame() {
    inquirer.prompt([
        {
        type: "list",
        message: "Please Choose the type of cards you would like to answer below\n",
        choices: ["Basic Cards", "Cloze Cards"],
        name: "cardOption"
        }
    ]).then(function(data){
		// console.log(data);
		var chosenOption = data.cardOption;

		if(chosenOption == "Basic Cards") {
			basicRound();
			
		} else {
			clozeRound(currentDeck[round]);		
		}
	});
};

function basicRound() {
	var question1Basic = new BasicCard("\nWhich jedi master's species has never been revealed?", "yoda");
			
			inquirer.prompt([
				{
					type: "input",
					message: question1Basic.front,
					name: "firstQuestion"
				}
			]).then(function(answer) {
				if (answer.firstQuestion == question1Basic.back) {
					console.log("\nYou got it right! In my experience, there's no such thing as luck!");
					console.log("\nYour answer of " + question1Basic.back + " was in fact, correct.");
					console.log("\nThanks for playing. There are a lot more questions in the cloze card game. Give them a try if you haven't yet!");
				} else {
					console.log("\nSorry, that's not correct...keep training, young padawan.");
					console.log("\nThe answer is actually: " + question1Basic.back);
					console.log("\nThanks for playing. There are a lot more questions in the cloze card game. Give them a try if you haven't yet!");
				}
			});
}

function clozeRound(currentCloze) {
	inquirer.prompt([
		{
			type: "input",
			message: currentCloze.partial,
			name: "firstQuestion"
		}
	]).then(function(answer) {
		round++;
		if (answer.firstQuestion == currentCloze.cloze) {
			console.log("\nYou got it right! The force is with you.");
			console.log("\nThe answer is " + currentCloze.cloze + "\n");
		} else {
			console.log("\nSorry, that's not correct...the dark side must have its grasp on you.");
			console.log("\nThe answer is actually: " + currentCloze.cloze + "\n");
		}
	
		if(round < currentDeck.length) {
			clozeRound(currentDeck[round]);
		} else {
			console.log("\nThat's the end of the game. I hope you enjoyed it!");
		}

	});
}

function closeQuestions() {
	inquirer.prompt([
		{
			type: "input",
			message: questionArray[i],
			name: "clozeQuestion"
		}
	]).then(function (answerCloze) {
		if (answerCloze.clozeQuestion == questionArray[i].cloze) {
			// console.log("You got it right! The force is with you.");
			console.log(questionArray[i].fullText);
		} else {
			// console.log("Sorry, that's not correct...the dark side must have its grasp on you.");
			console.log(questionArray[i].fullText);
		}
		i++;
		if (i < questionArray[i].length) {
			closeQuestions();
		} else {
			// console.log("That's the end of the game. I hope you enjoyed it!")
		}
	});
}

startGame();