/*
 * William Verhaeghe
 * William.verhaeghe@student.howest.be
 * 05/2016
 */

console.log("working...");
document.addEventListener("DOMContentLoaded", function () { init();});

function init()
{
	var print;
	print = window.document.getElementById("print");
	print.addEventListener("click", function () {window.print()});

	result.processResults(type, answer);
}

var result = {
	processResults: function (type, answer)
	{
		var resultSection = window.document.getElementById("resultSection");
		var answersSection = window.document.getElementById("answersSection");

		var sResultsContent = "", sAnswersContent = "";
		var questions = new Array(0), kleur;
		var correctAnswers = 0, questionsAnswered = 0;

		questions = (type === "oefeningen") ? exercises.getQuestions() : exercises.getExamQuestions();

		for (var i = 0; i < answer.length; i++)
		{
			var thisAnswer;
			var correctAnswer = questions[i]["answer" + questions[i]["correctAnswer"]];
			var bCorrect = (answer[i] === questions[i]["correctAnswer"]);

			sAnswersContent += "<h2>" + questions[i]["question"] + "</h2>";

			if (answer[i] === -1 || typeof answer[i] === "undefined")
			{
				bCorrect = false;
				thisAnswer = "Niet beantwoord!";
			}
			else
			{
				++questionsAnswered;
				thisAnswer = questions[i]["answer" + answer[i]];
			}

			if (!bCorrect)
			{
				sAnswersContent += "<p class='red'>Jouw antwoord: " + thisAnswer + " (Fout)</p>";
				sAnswersContent += "<p class='blue'>Juiste antwoord: " + correctAnswer + "</p>";
				sAnswersContent += "<p class='blue'>Uitleg: " + questions[i]["explanation"] + "</p>";
			}
			else
			{
				++correctAnswers;
				sAnswersContent += "<p class='green'>Jouw antwoord: " + questions[i]["answer" + answer[i]] + " (Juist)</p>";
			}
		}

		kleur = "rgb(" + Math.round(255 - 221 * correctAnswers / questions.length) + ", " + Math.round(187 * correctAnswers / questions.length) + ", 34)";
		sResultsContent += "<p style='color:" + kleur + "'>Juiste antwoorden: " + correctAnswers + " / " + questions.length + "</p>";

		kleur = "rgb(" + Math.round(255 - 221 * questionsAnswered / questions.length) + ", " + Math.round(187 * questionsAnswered / questions.length) + ", 34)";
		sResultsContent += "<p style='color:" + kleur + "'>Vragen beantwoord: " + questionsAnswered + " / " + questions.length + "</p>";

		//console.log(sAnswersContent);
		resultSection.innerHTML = sResultsContent;
		answersSection.innerHTML = sAnswersContent;
	}
};