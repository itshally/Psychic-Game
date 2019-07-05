//declaring variables
var winCount = document.getElementById('win-count'),
    loseCount = document.getElementById('lose-count'),
    guessLeft = document.getElementById('guess-left'),
    typedLetters = document.getElementById('typed-letters'),
    
    //default values
    win = 0,
    lose = 0,
    guess = 9,
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                "w", "x", "y", "z"];

    
    winCount.textContent = Number(win);
    loseCount.textContent = Number(lose);
    guessLeft.textContent = Number(guess);
                

// function that generates letters
function generateLetter() {
    // console.log(letters[Math.floor(Math.random() * letters.length)]);
     return letters[Math.floor(Math.random() * letters.length)];
}

var x = generateLetter();

// console.log(generateLetter());
document.onkeypress = function(e) {
    //key must be alphabets only
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
        console.log("letter");
    }else{
        console.log("ERROR: You must enter letters only");
    }
    
}//end of onkeypress

//reset function
function restart(){
    guess = 9;
    typedLetters.innerHTML = "";
    guessLeft.textContent = Number(guess);
}