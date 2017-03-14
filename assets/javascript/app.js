function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question1.value;
	var question3 = document.quiz.question1.value;
	var question4 = document.quiz.question1.value;
	var question5 = document.quiz.question1.value;
	var question6 = document.quiz.question1.value;
	var question7 = document.quiz.question1.value;
	var question8 = document.quiz.question1.value;
	var correct = 0;
	$("#quize").on("submit", function(event) {
	event.preventDefault();
	var answer = $("#quiz-answer");
	var answer = $answer.val();
	console.log(answer);

	if (question1 == "Toy Story"){
		correct++;
	}
	if (question2 == "Scary Spice"){
		correct++;
	}
	if (question3 == "Los Angeles Lakers"){
		correct++;
	}
	if (question4 == "The Offspring"){
		correct++;
	}
	if (question5 == "The Lion King"){
		correct++;
	}
	if (question6 == "Mirror"){
		correct++;
	}
	if (question7 == "Zach"){
		correct++;
	}
	if (question8 == "Mr. Diggers"){
		correct++;
	}
	var message = ["Great Job!", "That's just okay","You really need to do better"];
	<!-- var pictures = ["img/win.gif"] 


	var range;
		if (correct < 1){
			range = 2;
		}

		if (correct > 0 && correct <3){
			range = 1;
		}
		if (correct > 2){
			range = 0;
		}
			})

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = message[range];
document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";
document.getElementById("pictures").src = pictures[range];


}