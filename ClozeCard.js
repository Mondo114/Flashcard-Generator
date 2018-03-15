function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = function () {
        if (this.fullText.indexOf(this.cloze) > -1) {
           console.log((this.fullText).replace(this.cloze, "..."));
        } else {
            console.log("Error: The cloze deletion does not appear in the input text.");
        }
    }

}


module.exports = ClozeCard;