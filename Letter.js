

// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// Contains a constructor, Letter. 
function Letter(char) {
    this.char=char
    this.isGuessed=false
}

Letter.prototype.toString=function() {

// if the letter has been guessed,
    //  returns the underlying character 
//  else
    // return a placeholder (like an underscore) if the letter has not been guessed

}

Letter.prototype.checkGuess=function(char) {
// if char in this.char are equal
    // update this.isGuessed to true
    // return true
//  else return false
}



module.exports = Letter