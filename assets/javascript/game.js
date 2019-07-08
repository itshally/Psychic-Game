//declaring variables
var winCounter = document.getElementById('win-count'),
    loseCounter = document.getElementById('lose-count'),
    guessCounter = document.getElementById('guess-left'),
    typedLetters = document.getElementById('typed-letters'),
    greenAlert = document.getElementById('green-box'),
    redAlert = document.getElementById('red-box'),
    
    //default values
    winPoint = 0,
    losePoint = 0,
    guessesLeft = 10,
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                "w", "x", "y", "z"];

winCounter.textContent = Number(winPoint);
loseCounter.textContent = Number(losePoint);
guessCounter.textContent = Number(guessesLeft);

          
//a function that generates letters
function generateLetter(){
    return letters[Math.floor(Math.random() * letters.length)];
}

//a variable with a value of function
var newLetter = generateLetter();

//a function that restarts the game after the user lost or won
function restart(){
    guessesLeft = 10;
    typedLetters.innerHTML = "";
    guessCounter.textContent = Number(guessesLeft);
    newLetter = generateLetter();
    return newLetter;
}

//getting the pressed key event on the page
document.onkeypress = function(e) {
    //hides the alert box by default
    $('#green-box').hide();
    $('#red-box').hide();
    
    //a conditional statement that checks if the keyCode is for a letter or not
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
        
        //a variable that converts the keyCode number to its string value
        var keyPressed = String.fromCharCode(e.keyCode).toLowerCase();

        //checks if the pressed key is not matched to the computer generated letter
        if(keyPressed !== newLetter){

            //if the guess counter runs out
            if(guessesLeft == 1){

                //an alert-danger box will appear with a string that shows the correct letter
                $('#red-box').show();
                redAlert.textContent = "You lost! It's letter " + newLetter;
                
                //counter for lose points will increment to 1
                losePoint++;
                loseCounter.textContent = losePoint;

                //then the game will restart again
                restart();

            //however, if there are still guesses left    
            }else
            {   
                //and if the letter hasn't been pressed, it will add up to the list
                if(!typedLetters.innerHTML.match(keyPressed)){
                    //shows the list of pressed letters; automatically changes to lowercase...
                    //if user entered a capital letter
                    typedLetters.innerHTML += e.key.toLowerCase()  + ", ";
                    
                    //guess counter will keep on decrementing
                    guessesLeft--;
                    guessCounter.textContent = guessesLeft;

                //but if the letter has already been pressed, it  will genereate an alert box
                //and guess counter will not going to decrement
                }else{
                    $('#red-box').show();
                    redAlert.textContent = "You already pressed it.";
                }
            }

        //if the pressed key is matched to the computer generated letter
        }else{
            
            //an alert-success box will appear with a string that shows achievement
            $('#green-box').show();
            greenAlert.textContent = "You got it! It's letter " + newLetter;

            //counter for win points will inrement to 1
            winPoint++;
            winCounter.textContent = winPoint;

            //then the game will restart again
            restart();
            
        }
    
    //if the user pressed any key that is not included in the conditional statement
    }else{

        //an alert-danger box will appear with a string
        $('#red-box').show();
        redAlert.textContent = "Letters Only";
    }
    
}//end of onkeypress

