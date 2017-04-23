<?php
//http://rijbewijsoefenen.be/course/index/index/c/b

require_once("./assets/functions/configLinks.php");
require_once("./assets/functions/htmlfunctions.php");

htmlIntro("oefeningen");
?>
<article class="oefening">
	<section>
		<h1 id="questionCategory">Oefeningen</h1>
		<img src="./assets/images/placeholderExercises.jpg" id="questionImage"/>
	</section>
	<section class="lower">
		<p id="questionText">Welkom bij oefeningen. Je kunt beginnen door op &quot;Eerste vraag&quot te klikken. Bij
			deze oefeningen heb je zoveel tijd je wilt en krijg je onmiddellijk de oplossing te zien. Nadat je alle
			vragen hebt beantwoord krijg je nog een overzichtje met welke vragen je hebt beantwoord.</p>
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
<?php
htmlEnd();
?>
