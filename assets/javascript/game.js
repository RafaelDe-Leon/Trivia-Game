//test to see if document link is working
console.log(quizQuestions);
var counter = 5; // var that holds our counter
var timer; // holds the timer for the game
var currentQuestion = 0;
var score = 0; //score var
var lost = 0; //lost var

//========================================================================
// if the timer is over go to the next question
function nextQuestion() {
  var isQuestionOver = quizQuestions.length - 1 === currentQuestion;

  if (isQuestionOver) {
    console.log("Game is over");
    displayResults();
  } else {
    currentQuestion++;
    loadQuestion();
  }
}

// when time is up clear timer and move to the next question and increase lost by 1
function timeUp() {
  clearInterval(timer);
  lost++;
  nextQuestion();
}

//start a 30 second timer for user to respond to each question

function countDown() {
  counter--;
  $("#time").html("<h2> Time Left: " + counter + "</h2>");

  if (counter === 0) {
    timeUp();
  }
}

// Display the questions and choices to the browser
function loadQuestion() {
  clearInterval(timer);
  counter = 5;
  timer = setInterval(countDown, 1000);

  var question = quizQuestions[currentQuestion].question; //
  var choices = quizQuestions[currentQuestion].choices; //

  $("#time").html("<h2> Time Left: " + counter + "</h2>");

  //append to id game
  $("#game").html(`
    <h4> ${question} </h4>
    ${loadChoices(choices)}
    `);
}

// load question function
function loadChoices(choices) {
  var result = "";

  for (var i = 0; i < choices.length; i++) {
    result += `<button class=" btn btn-primary choice button-color" data-answer="${
      choices[i]
    }">${choices[i]}</button>`;
  }

  return result;
}

// Either wrong and right answer selected, go to the next question

$(document).on("click", ".choice", function() {
  clearInterval(timer);
  var selectedAnswer = $(this).attr("data-answer");
  var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
  // check if working
  // console.log("yes", selectedAnswer);

  if (correctAnswer === selectedAnswer) {
    console.log("yes");
    score++;
    nextQuestion();
  } else {
    lost++;
    console.log("no");
    nextQuestion();
  }
});

// display the results

function displayResults() {
  var result = `
<p> You get ${score} questions(s) right</p>
<p> You missed ${lost} questions(s) right</p>
<p> Total questions ${quizQuestions.length} questions(s) right</p>
<button class="btn btn-primary button-color" id="reset"> Reset Game </button>
    `;
  $("#game").html(result);
}

function reset() {
    $(document).on("click", "#reset", function(){

    })
}

loadQuestion();

//========================================================================
