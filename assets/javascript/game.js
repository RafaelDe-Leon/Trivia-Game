// You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.


 // var that holds our counter
var counter = 60;


// var that holds our interval id when we execute 
var timerValid;

// create a timer that when it ends it finishes the game and display win or lose

function run() {
    clearInterval(timerValid);
    // timer set to minus 1 sec
    timerValid = setInterval(decrement, 1000);
}

function decrement() {

    // decrease the number by 1
    counter--

    // show the number in the #show-numer id tag
    $("#show-timer").html("<h2> Time Left: " + counter + "</h2>");

// testing
    console.log("timer");

    if (counter === 0) {
        stop();
        alert("Time's up!");
    }
}

// stop function 
function stop() {
    clearInterval(timerValid);
}

//call run function
run();

