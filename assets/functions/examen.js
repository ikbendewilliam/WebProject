/*
 * William Verhaeghe
 * William.verhaeghe@student.howest.be
 * 04/2016
 */


document.addEventListener("DOMContentLoaded", function () { init();});

function init()
{
	var buttonNext, choices;

	buttonNext = window.document.getElementById("buttonNext");
	buttonNext.addEventListener("mouseover", function () {colorChanger.changeColor(this)});
	buttonNext.addEventListener("mouseout", function () {colorChanger.changeColor(this)});
	buttonNext.addEventListener("click", function () {exercises.nextExamenQuestion()});
	buttonNext.value = "Eerste vraag";

	choices = window.document.getElementById("choices");
	choices.className = "hidden";
}