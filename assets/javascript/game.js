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
    console.log(letters[Math.floor(Math.random() * letters.length)]);
     return letters[Math.floor(Math.random() * letters.length)];
}


document.onkeypress = function(e) {
    if(e.key !== generateLetter()){
        typedLetters.innerHTML += e.key.toLowerCase()  + ", ";
        
        if(guess != 0){
            guess--;
            guessLeft.textContent = guess;
        }else{
            lose += 1;
            loseCount.textContent = lose;
            restart();
        }
        
    }else{
        typedLetters.innerHTML = "matches";
        win += 1;
        winCount.textContent = win;
        restart();
    }
}

//reset function
function restart(){
    guess = 9;
    typedLetters.innerHTML = "";
    guessLeft.textContent = Number(guess);
}