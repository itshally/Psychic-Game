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
function generateLetter(){
    let letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter);
    return letter;
}

var newLetter = generateLetter();

//function that restarts the game whether the user lost or won
function restart(){
    guess = 9;
    typedLetters.innerHTML = "";
    guessLeft.textContent = Number(guess);
    newLetter = generateLetter();
    return newLetter;
}

document.onkeypress = function(e) {
    //key must be alphabets only
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
        console.log("letter");
        //if key is not match to the generated letter
        var coded = String.fromCharCode(e.keyCode).toLowerCase();
        if(coded !== newLetter){
            //list the pressed letters
            console.log("NOT MATCHED");
            typedLetters.innerHTML += e.key.toLowerCase()  + ", ";

            //if guess left is 0
            if(guess == 0){
                lose += 1;
                loseCount.textContent = lose;
                restart();
            }else{
                guess--;
                guessLeft.textContent = guess;
            }
        }else{
            console.log("MATCHED");
            win += 1;
            winCount.textContent = win;
            restart();
        }
    }else{
        console.log("ERROR: You must enter letters only");
    }
    
}//end of onkeypress

