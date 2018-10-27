function populate(){
	 if (quiz.isEnded()) {
	 	showScores();
	 }
	 else{
	 	//show question
	 	var element = document.getElementById("question");
	 	element.innerHTML = quiz.getQuestionIndex().text;
        
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
        	var element = document.getElementById("choice" +i);
        	element.innerHTML = choices[i];
        	guess("btn"+i, choices[i]);

        }
        showProgress();
	 }
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};


function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber +" of "+quiz.questions.length;

}

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score: "+quiz.score +"</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};

var quesions = [
    new Question("Which one is not an OOP language1?",["java","C#","C++","C"],"C"),
    new Question("Which one is not an OOP language2?",["java","C#","C++","C"],"C"),
    new Question("Which one is not an OOP language3?",["java","C#","C++","C"],"C"),
    new Question("Which one is not an OOP language4?",["java","C#","C++","C"],"C"),
    new Question("Which one is not an OOP language5?",["java","C#","C++","C"],"C")
];

var quiz = new Quiz(quesions);

populate();