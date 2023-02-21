var questions = [
    'Question: Why are bicycles so dangerous?',
    'Question: What happens if you are obsessed with fire safety?',
    'Question: What happens when I recognise that you are the prick who started this and you are are in the toilet with just me and no witnesses?'
]

var answers = [];

// hook into the actual question text
const questionText = document.getElementById('question-text');

// hook into all the radio buttons
const radio1 = document.getElementById('choice-1');
const radio2 = document.getElementById('choice-2');
const radio3 = document.getElementById('choice-3');
const radio4 = document.getElementById('choice-4');
const radio5 = document.getElementById('choice-5');

// counter for the current question
var currentQuestionNumber = 0;

// hook into the submit button
const submit = document.getElementById('submit');

function setup() {

    document.getElementById('submit').addEventListener('click', getChoice);
}


function game() {
    // just display the first question
    questionText.innerText = questions[currentQuestionNumber];
}


function getChoice() {
    if ((radio1.checked == false) &&
        (radio2.checked == false) &&
        (radio3.checked == false) &&
        (radio4.checked == false) &&
        (radio5.checked == false)
    )
        return;

    if (radio1.checked) {
        answers.push('1');
    } else if (radio2.checked) {
        answers.push('2');
    } else if (radio3.checked) {
        answers.push('3');
    } else if (radio4.checked) {
        answers.push('4');
    } else {
        answers.push('5');
    }


   
    if (currentQuestionNumber < questions.length-1) {
        currentQuestionNumber++ }
    else {
        showGraph();
    }

    // update question to next one
    questionText.innerText = questions[currentQuestionNumber];
    // reset all radio buttons
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;

}


function showGraph() {
   
    for (i=0; i<answers.length; i++) {
        alert(answers[i]);
    }
    // put your graph stuff here !!!!!!!!!!

}
// The main code - i.e. the actual call to the game function
setup();
game();
