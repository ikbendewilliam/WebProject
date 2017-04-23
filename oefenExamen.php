<?php
require_once("./assets/functions/configLinks.php");
require_once("./assets/functions/htmlfunctions.php");

htmlIntro("examen");
?>
<article class="oefening">
	<section>
		<h1 id="questionCategory">Oefen-examen</h1>
		<img src="./assets/images/placeholderExercises.jpg" id="questionImage"/>
	</section>
	<section class="lower">
		<p id="questionText">Welkom bij het oefen Examen. Je kunt beginnen door op &quot;Eerste vraag&quot; te klikken.
			Bij deze oefeningen heb je 60 seconden, dit is meer op het examen, maar hier begint de tijd onmiddellijk te
			lopen. Op een theorie-examen begint de tijd in principe pas te lopen nadat de vraag is voorgelezen. Indien
			de tijd verlopen is en je hebt geen antwoord aangeduid, zal de vraag als verkeerd beantwoord worden
			beschouwd. De blauwe banner beneden toont hoeveel tijd je al hebt gebruikt. Nadat je alle vragen hebt
			beantwoord krijg je nog een overzichtje met de vragen, jouw antwoord en eventueel het juiste antwoord.</p>
		<hr/>
		<ul id="choices">
			<li><input type="radio" id="answer0" name="answer" value="0"/><label for="answer0" id="questionAnswer0">
					</label></li>
			<li><input type="radio" id="answer1" name="answer" value="0"/><label for="answer1" id="questionAnswer1">
					</label></li>
			<li><input type="radio" id="answer2" name="answer" value="0"/><label for="answer2" id="questionAnswer2">
					</label></li>
		</ul>
		<div id="errors"></div>
		<div class="buttons">
			<input type="submit" id="buttonNext" class="button" value="Controleer"/>
		</div>
	</section>
</article>
<article>
	<section class="timeBarContainer">
		<div id="timeBar" class="timeBar"></div>
	</section>
</article>
<?php
htmlEnd();
?>
