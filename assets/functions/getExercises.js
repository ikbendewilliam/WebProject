/*
 * William Verhaeghe
 * William.verhaeghe@student.howest.be
 * 05/2016
 */
const QUESTIONS = 6;
var exercises = {
	bNext: false,
	bStarted: false,
	answers: new Array(QUESTIONS),
	timeSteps: 0,
	interval: -1,
	maxTime: 60,

	getQuestions: function ()
	{
		var questions = new Array(0);

		questions.push({
			"category": "Voorrang",
			"img": "B15.png",
			"question": "Je komt aan een kruispunt en je ziet het bord B15 aan de rechterkant van de weg staan. Wie heeft er voorrang?",
			"answer0": "Ik heb voorrang op de auto's van zowel links als rechts.",
			"answer1": "De eerste die aan het kruispunt komt.",
			"answer2": "Voorrang van rechts geld hier.",
			"correctAnswer": 0,
			"explanation": "Het bord B15 betekent dat je bij het eerstvolgend kruispunt voorrang hebt."
		});
		questions.push({
			"category": "Voorrang",
			"img": "B17.png",
			"question": "Je komt aan een kruispunt en je ziet het bord B17 aan de rechterkant van de weg staan. Wie heeft er voorrang?",
			"answer0": "Voorrang van rechts geld hier.",
			"answer1": "De eerste die aan het kruispunt komt.",
			"answer2": "Ik heb voorrang op de auto's van zowel links als rechts.",
			"correctAnswer": 0,
			"explanation": "Het bord B17 betekent dat bij het eerstvolgend kruispunt voorrang van rechts geld."
		});
		questions.push({
			"category": "Voorrang",
			"img": "B5.png",
			"question": "Je komt aan een kruispunt en je ziet het bord B5 aan de rechterkant van de weg staan. Wat doe je?",
			"answer0": "Je hebt voorrang nadat je bent gestopt.",
			"answer1": "Je geeft voorrang af en indien nodig stop je.",
			"answer2": "Je stopt en nadien geef je voorrang.",
			"correctAnswer": 2,
			"explanation": "Het bord B5 betekent dat bij je moet stoppen en voorrang moet verlenen."
		});
		questions.push({
			"category": "Snelheid",
			"img": "f1b.png",
			"question": "Wat is de maximumsnelheid na het bord F1a of F1b?",
			"answer0": "70 km/h",
			"answer1": "50 km/h",
			"answer2": "Indien er geen andere borden staan, mag je zo snel rijden als je maar wilt",
			"correctAnswer": 1,
			"explanation": "De verkeerdsborden F1a en f1b duiden het begin van de beboude kom aan. Hier is de maximumsnelheid 50 km/h."
		});
		questions.push({
			"category": "Snelheid",
			"img": "F5.png",
			"question": "Wat betekent het verkeersbord F5?",
			"answer0": "Je rijdt van de autosnelweg.",
			"answer1": "Je mag 120 km/h omdat je de autosnelweg oprijd",
			"answer2": "Je mag 100 km/h omdat je de autosnelweg oprijd",
			"correctAnswer": 1,
			"explanation": "Het bord F5 duidt het begin van de autosnelweg aan. Hier is de maximumsnelheid 120 km/h tenzij anders vermeld."
		});
		questions.push({
			"category": "Verkeerdsborden",
			"img": "street.png",
			"question": "Wat wilt dit bord zeggen?",
			"answer0": "Je rijdt een straat in zonder zijstraten.",
			"answer1": "Je rijdt een doodlopende straat in, maar fietsers en voetgangers mogen hier niet in.",
			"answer2": "Je rijdt een doodlopende straat in, maar voor fietsers en voetgangers is deze straat niet doodlopend.",
			"correctAnswer": 2  ,
			"explanation": "Het bord F45b duid een doorlopende straat aan. Dit is een doodlopende straat voor auto's, maar voor fietsers en voetgangers is deze straat niet doodlopend."
		});

		//console.log(questions[questions.length - 1]["explanation"]);

		return questions;
	},

	getExamQuestions: function ()
	{
		var questions = new Array(0);

		questions.push({
			"category": "Voorrang",
			"img": "Board.png",
			"question": "Je wilt door een wegversmalling rijden, maar door de sneeuw kun je niet zien aan het bord wie er voorrang heeft, wel zie je dat het een rond bord is. Wie heeft er voorrang?",
			"answer0": "De eerste die aan de versmalling komt.",
			"answer1": "Een rond bord (B19) wilt zeggen dat ik voorrang heb.",
			"answer2": "Een rond bord (B19) wilt zeggen dat de andere voorrang heeft.",
			"correctAnswer": 2,
			"explanation": "Bij een versmalling staat er altijd een rond bord (B19) dat je voorrang moet verlenen en een rechthoekig bord (B21) dat je voorrang hebt."
		});
		questions.push({
			"category": "Voorrang",
			"img": "rotonde.jpg",
			"question": "Je komt aan een rotonde, wie heeft er voorrang?",
			"answer0": "Het voertuig dat van rechts komt.",
			"answer1": "De voertuigen op de rotonde.",
			"answer2": "De mooiste wagen.",
			"correctAnswer": 1,
			"explanation": "De voertuigen die zich op de rotonde begeven hebben voorrang op degene dat erop willen rijden."
		});
		questions.push({
			"category": "Voorrang",
			"img": "B1.png",
			"question": "Je komt aan een kruispunt en je ziet het bord B1 aan de rechterkant van de weg staan. Wie heeft er voorrang?",
			"answer0": "Je geeft voorrang af en indien nodig stop je.",
			"answer1": "Voorrang van rechts geld hier.",
			"answer2": "je hebt voorrang op de auto's van zowel links als rechts.",
			"correctAnswer": 0,
			"explanation": "Het bord B1 betekent dat je bij het eerstvolgend kruispunt voorrang moet verlenen."
		});
		questions.push({
			"category": "Snelheid",
			"img": "F47.png",
			"question": "Je passeert wegenwerken waar aan het begin een snelheidsbeperking van 30 km/h wordt opgelegd. Je nadert het einde en ziet het bord F47. Hoe snel mag je na dit bord?",
			"answer0": "Even snel als voor de wegenwerken.",
			"answer1": "In de bebouwde kom 50 km/h, buiten de bebouwde kom 90 km/h",
			"answer2": "30 km/h",
			"correctAnswer": 2,
			"explanation": "Het verkeerdsbord dat het einde van de wegenwerken aanduid (F47) heeft geen effect op de snelheidsbeperkingen. Je mag dus nog altijd maar 30 km/h."
		});
		questions.push({
			"category": "Snelheid",
			"img": "F12b.png",
			"question": "Je gps heeft je een straat ingestuurd en op het einde van de straat is het bord F12b te zien. Hoe snel mag je in deze straat?",
			"answer0": "20 km/h",
			"answer1": "25 km/h",
			"answer2": "30 km/h",
			"correctAnswer": 0,
			"explanation": "Het bord F12b staat op het einde van een woonerf of erf. Hierin mag je 20 km/h."
		});
		questions.push({
			"category": "Verkeerdsborden",
			"img": "4boards.png",
			"question": "Je komt aan de volgende situatie. Je ziet deze borden. Welk antwoord is van toepassing hier?",
			"answer0": "Er kunnen hier geen auto's door die langer zijn dan 3meter en 90 centimeter en je mag tot hier niet parkeren.",
			"answer1": "Je mag tot hier niet parkeren, maar je moet wel betalen bij het parkeren.",
			"answer2": "Er is een drukke oversteekplaats over 75m en je mag vanaf hier niet parkeren.",
			"correctAnswer": 1,
			"explanation": "Het klinkt onlogisch, maar je mag tot hier niet parkeren terwijl je wel moet wel betalen bij het parkeren. Ook mogen hier geen voertuigen door die smaller zijn dan 3m90 en is er een drukke oversteekplaats over 75m."
		});

		return questions;
	},

	timerStep: function ()
	{
		exercises.timeSteps += 0.01;

		var timeBar;
		timeBar = window.document.getElementById("timeBar");
		timeBar.style.width = (exercises.timeSteps * 100 / exercises.maxTime) + "%";
		if (exercises.timeSteps >= 2)
		{
			timeBar.innerText = Math.floor(exercises.timeSteps) + " / " + exercises.maxTime + "s";
		}
		else
		{
			timeBar.innerText = Math.floor(exercises.timeSteps) + "s";
		}

		if (exercises.timeSteps > exercises.maxTime)
		{
			if (!exercises.nextExamenQuestion(1, false))
			{
				clearInterval(exercises.interval);
			}
		}
	},

	nextOefeningQuestion: function (addToIndex, checkIfAnswered)
	{
		var errors, questionImage, questionText, questionCategory;
		var questionAnswer = new Array(3), answer = new Array(3);
		var bHasNextQuestion = true;
		var buttonNext;
		var choices;

		buttonNext = window.document.getElementById("buttonNext");

		errors = window.document.getElementById("errors");

		questionCategory = window.document.getElementById("questionCategory");
		questionImage = window.document.getElementById("questionImage");
		questionText = window.document.getElementById("questionText");

		questionAnswer[0] = window.document.getElementById("questionAnswer0");
		questionAnswer[1] = window.document.getElementById("questionAnswer1");
		questionAnswer[2] = window.document.getElementById("questionAnswer2");

		answer[0] = window.document.getElementById("answer0");
		answer[1] = window.document.getElementById("answer1");
		answer[2] = window.document.getElementById("answer2");

		choices = window.document.getElementById("choices");

		errors.innerHTML = "";

		if (!exercises.bStarted)
		{
			addToIndex = 0;
			checkIfAnswered = false;
		}

		if (answer[0].checked || answer[1].checked || answer[2].checked || !checkIfAnswered)
		{
			var questions;
			var index = 0;

			questions = exercises.getQuestions();
			console.log(questions.length - 1);
			console.log(questions[1]["explanation"]);

			for (var i = 0; i < questions.length; i++)
			{
				console.log("Cheking question: " + i);
				if (questions[i]["question"] === questionText.innerText)
				{
					index = i;
				}
			}

			// Check antwoord
			if (!exercises.bNext && checkIfAnswered)
			{
				for (var i = 2; i >= 0; i--)
				{
					if (answer[i].checked)
					{
						exercises.answers[index] = i;
					}
				}

				if (exercises.answers[index] == questions[index]["correctAnswer"])
				{
					//correct
					errors.className = "green";
					errors.innerHTML = questions[index]["explanation"];

					questionAnswer[exercises.answers[index]].className = "green";
				}
				else
				{
					//wrong
					errors.className = "blue";
					errors.innerHTML = questions[index]["explanation"];

					questionAnswer[exercises.answers[index]].className = "red";
					questionAnswer[questions[index]["correctAnswer"]].className = "blue";
				}

				for (var i = 2; i >= 0; i--)
				{
					answer[i].disabled = true;
				}

				buttonNext.value = "Volgende vraag";

				exercises.bNext = true;
			}
			else
			{
				// Haal volgende vraag op
				index += addToIndex;

				if (index >= questions.length)
				{
					index = questions.length - 1;
					errors.className = "blue";
					errors.innerHTML = "Even geduld...";

					bHasNextQuestion = false;
					var nextLocation = "./result.php?type=oefeningen";

					for (var i = exercises.answers.length - 1; i >= 0; i--)
					{
						nextLocation += "&q" + i + "=" + exercises.answers[i];
					}
					window.location.href = nextLocation;
				}

				if (index < 0)
				{
					index = 0;

					errors.className = "blue";
					errors.innerHTML = "Je kan niet meer terug";
				}

				//console.log("Next question: " + index);

				questionCategory.innerHTML = questions[index]["category"] + " (Vraag " + (index + 1) + " van " + questions.length + ")";
				questionImage.src = "./assets/images/exercises/" + questions[index]["img"];
				questionText.innerHTML = questions[index]["question"];


				for (var i = 2; i >= 0; i--)
				{
					questionAnswer[i].innerText = " " + questions[index]["answer" + i];
					questionAnswer[i].className = "";
					answer[i].checked = false;
				}

				buttonNext.value = "Controleer";

				for (var i = 2; i >= 0; i--)
				{
					answer[i].disabled = false;
				}

				exercises.bNext = false;
			}
		}
		else
		{
			errors.className = "red";
			errors.innerHTML = "Gelieve een antwoord aan te duiden.";
		}

		if (choices.className != "")
		{
			choices.className = "";
			exercises.bStarted = true;
		}

		return bHasNextQuestion;
	},

	//nextExamenQuestion: function (addToIndex = 1, checkIfAnswered = true) // Works since 2015, but phpstorm gives
	// error -_-
	nextExamenQuestion: function (addToIndex, checkIfAnswered)
	{
		// Pre 2015 -> older browsers
		// Default parameters
		addToIndex = (typeof addToIndex !== 'undefined') ? addToIndex : 1;
		checkIfAnswered = (typeof checkIfAnswered !== 'undefined') ? checkIfAnswered : true;

		var errors, questionImage, questionText, questionCategory;
		var questionAnswer = new Array(3), answer = new Array(3);
		var bAnswered = false, bHasNextQuestion = true;
		var buttonNext, choices;

		errors = window.document.getElementById("errors");

		questionCategory = window.document.getElementById("questionCategory");
		questionImage = window.document.getElementById("questionImage");
		questionText = window.document.getElementById("questionText");

		questionAnswer[0] = window.document.getElementById("questionAnswer0");
		questionAnswer[1] = window.document.getElementById("questionAnswer1");
		questionAnswer[2] = window.document.getElementById("questionAnswer2");

		answer[0] = window.document.getElementById("answer0");
		answer[1] = window.document.getElementById("answer1");
		answer[2] = window.document.getElementById("answer2");

		choices = window.document.getElementById("choices");

		errors.innerHTML = "";

		buttonNext = window.document.getElementById("buttonNext");

		if (!exercises.bStarted)
		{
			addToIndex = 0;
			checkIfAnswered = false;
		}

		if ((answer[0].checked || answer[1].checked || answer[2].checked) || !checkIfAnswered)
		{
			var questions;
			var index = 0;

			questions = exercises.getExamQuestions();
			//console.log("#questions: " + questions.length);

			for (var i = 0; i < questions.length; i++)
			{
				if (questions[i]["question"] === questionText.innerText)
				{
					index = i;
					//console.log("Previous question: " + index);
				}
				//console.log("checked question: " + i);
			}

			// save antwoord
			exercises.answers[index] = -1;
			for (var i = 2; i >= 0; i--)
			{
				if (answer[i].checked)
				{
					exercises.answers[index] = i;
				}
			}

			// Haal volgende vraag op
			index += addToIndex;

			if (index < 0)
			{
				index = 0;
			}

			if (index >= questions.length)
			{
				index = questions.length - 1;
				errors.className = "blue";
				errors.innerHTML = "Even geduld...";

				bHasNextQuestion = false;
				var nextLocation = "./result.php?type=examen";

				for (var i = exercises.answers.length - 1; i >= 0; i--)
				{
					nextLocation += "&q" + i + "=" + exercises.answers[i];
				}
				window.location.href = nextLocation;
			}

			// console.log("Next question: " + index);

			questionCategory.innerHTML = questions[index]["category"] + " (Vraag " + (index + 1) + " van " + questions.length + ")";
			questionImage.src = "./assets/images/exercises/" + questions[index]["img"];
			questionText.innerHTML = questions[index]["question"];


			for (var i = 2; i >= 0; i--)
			{
				questionAnswer[i].innerText = " " + questions[index]["answer" + i];
				questionAnswer[i].className = "";
				answer[i].checked = false;
			}

			bAnswered = true;
		}
		else
		{
			errors.className = "red";
			errors.innerHTML = "Gelieve een antwoord aan te duiden.";
			bAnswered = false;
		}

		if (exercises.timeSteps >= 30 || bAnswered)
		{
			exercises.timeSteps = 0;
		}

		if (choices.className != "")
		{
			choices.className = "";
			exercises.bStarted = true;
			exercises.timeSteps = 0;
			buttonNext.value = "Volgende vraag";
			if (exercises.interval === -1)
			{
				exercises.interval = setInterval(function () {exercises.timerStep()}, 10);
			}
		}

		return bHasNextQuestion;
	}
};