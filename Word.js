var Letter = require("./Letter")
// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(randomWord) {
// An array of new Letter objects representing the letters of the underlying word
var wordArr=randomWord.split("")
    this.letters=wordArr.map(function(char) {
        return new Letter(char)
    })  
}


Word.prototype.toString=function() {
// This should call the function for each letter object in this.letters call the letter's toString function (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
}

Word.prototype.isCorrect=function(userChar) {
//  for each letter object in this.letters call the guess function(the second function defined in Letter.js)    
}

module.exports = Word