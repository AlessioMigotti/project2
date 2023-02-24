var questions = [
    'Freedom is a state of the mind.',
    'You\'re free to do what you want.',
    'You don\'t feel something is restricting your freedom.',
    'You can ask anyone whatever you want.',
    'You can dance at any moment.'
];

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
    console.log(answers);



    if (currentQuestionNumber < questions.length - 1) {
        currentQuestionNumber++
    } else {
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

    document.getElementById('survey-current-question').style.display = 'none';
    document.getElementById('submit').style.display = 'none';

    // put your graph stuff here !!!!!!!!!!

    var xValues = ['q1', 'q2', 'q3', 'q4', 'q5'];
    var yValues = answers;

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: "Your Freedom",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#004d00",
                data: yValues,
                pointRadius: 5, // set the size of the data points
                pointHoverRadius: 7 // set the size of the data points when hovered over
            }]
        },
        options: {
            title: {
                display: true,
                text: 'My Freedom State'
            },
            scales: {
                yAxes: [{
                    ticks: {

                        max: 5,
                        min: 1,
                        stepSize: 1 // Add this option to make y-axis labels integers
                    }
                }]
            },
            annotation: {
                annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 3,
                    borderColor: '#ba0000',
                    borderWidth: 5,
                }]
            },

        }
    });

}
// The main code - i.e. the actual call to the game function
setup();
game();