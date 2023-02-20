


/* 

function init() {

    //setup all the button listeners

    document.getElementById('submit').addEventListener('click' goToNext)          

    // setup the question array
    var questions = ["Question1 dsflkfdskjfdskjl", "question 2 sdffdsfdsfds", "question 3 sdffdsfdsfds", "question 4 sdffdsfdsfds"];



}



function game() {

    
    let i = 0;

    for (questionNumber = 0; questionNumber < questions.length; questionNumber++) {
    
    questionHTML = `<h1>${questions[i]}</h1>`;

    document.getElementById("survey-current-question").innerHTML = questionHTML;

    goToNext = questionNumber++;   



    }

}


game(); */

 document.getElementById('submit').addEventListener('click', nextQuestion);

 var q1 = document.querySelector('#q1');
 var q2 = document.querySelector('#q2');
 var q3 = document.querySelector('#q3');
 var q4 = document.querySelector('#q4');

var questionNumber = 1;
// let questionList = [q1, q2, q3, q4];

// for (let q=0; q<questionList.length; q++) {

// }



// let nextQuestion {questionIncrementer = 0, questionIncrementer++}; 

// console.log('button pressed');
// console.log(questionIncrementer);


function nextQuestion () {
    q1.style.display = "none";
    q2.style.display = "block";
    
} //also nextQuestion () {
//     q2.style.display = "none";
//     q3.style.display = "block";
    
// } then  nextQuestion () {
//     q3.style.display = "none";
//     q4.style.display = "block";
    
// } 

let i = q1, j = q2, k = q3, l = q4;

function ensureRadioValue() {
    var ele = document.getElementsByName('free1');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "hf: "+ele[i].value;}}