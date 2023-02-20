




function init() {

    //setup all the button listeners

    document.getElementById('submit').addEventListener('click'goToNext)          

    // setup the question array
    var questions = ["Question1 dsflkfdskjfdskjl", "question 2 sdffdsfdsfds", "question 3 sdffdsfdsfds", "question 4 sdffdsfdsfds"];



}

function goToNext() {
     
}

function game() {

    
    let i = 0;

    for (questionNumber = 0; questionNumber < questions.length; questionNumber++) {
    
    questionHTML = `<h1>${questions[i]}</h1>`;

    document.getElementById("survey-current-question").innerHTML = questionHTML;



    }

}


game();