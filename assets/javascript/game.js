//test to see if document link is working
console.log(quizQuestions);

var counter = 60; // var that holds our counter
var timer; // holds the timer for the game
var currenQuestion = 0;
var score = 0; //score var
var lost = 0; //lost var

function loadQuestion() {
  var question = quizQuestions[currenQuestion].question; //
  var choices = quizQuestions[currenQuestion].choices; //

  $("#time").html("Timer: " + counter);
  //append to id game
  $("#game").html(`
    <h4> ${question} </h4>
    ${loadChoices(choices)}
    `);
    
}

function loadChoices(choices) {
    var result = "";

    for (var i = 0; i < choices.length; i++) {
        result += `<button class="choice button-color" data-answer="${choices[i]}">${choices[i]}</button>`;

    }

    return result;
}

loadQuestion();





// create a timer that when it ends it finishes the game and display win or lose

function run() {
  clearInterval(timer);
  // timer set to minus 1 sec
  timer = setInterval(decrement, 1000);
}

function decrement() {
  // decrease the number by 1
  counter--;

  // show the number in the #show-numer id tag
  $("#timer").html("<h2> Time Left: " + counter + "</h2>");

  // testing
  console.log("timer");

  if (counter === 0) {
    stop();
    alert("Time's up!");
  }
}

// click even for buttons

//  $("button").

// stop function
function stop() {
  clearInterval(timer);
}

//call run function
run();
