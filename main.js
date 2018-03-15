var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

console.log("Hello and welcome to my flashcard question game!");

var president = new ClozeCard("George Washington was the first president", "George Washington");

// Put below in inquirer
president.partial();