// You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

 // var that holds our counter
var counter = 30;


// var that holds our interval id when we execute 
var timerValid;

// create a timer that when it ends it finishes the game and display win or lose

function timer() {
    clearInterval(timerValid);
    // timer set to minus 1 sec
    timerValid = setInterval(decrement, 1000);
}

function decrement() {

    // decrease the number by 1
    counter--
}