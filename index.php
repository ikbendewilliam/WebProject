<?php
if (basename($_SERVER["REQUEST_URI"]) !== "index.php")
{
	header("location:index.php");
}

require_once("./assets/functions/configLinks.php");
require_once("./assets/functions/htmlfunctions.php");
htmlIntro();

?>
<article>
	<section>
		<h1>Theoretisch rijbewijs B</h1>
		<p>Met een auto kunnen en mogen rijden levert zoveel meer mogelijkheden. Hiervoor heb je echter wel een
			rijbewijs nodig. Een rijbewijs is dan ook voor veel mensen een van de eerste stappen in de volwassen
			wereld. Je zult eerst een theoretisch examen moeten afleggen voor een rijbewijs B. Deze website helpt je
			met het zo goed mogelijk voorbereiden naar dit examen.</p>
	</section>

	<section>
		<img src="./assets/images/traffic.jpg" width="700" height="393"/>
	</section>
</article>
<article class="midArticle">
	<section>
		<a href="./theorie.php" class="noLinkStyle">
			<h2>Theorie leren</h2>
			<p>We verwijzen naar een goede, vertrouwbaar en gratis website. Je kunt via deze weg snel en veel theorie
				bekijken.</p>
		</a>
	</section>
	<section>
		<a href="./oefeningen.php" class="noLinkStyle">
			<h2>Oefeningen maken</h2>
			<p>Je kunt oefeningen maken op theorie dat je al hebt gezien. Duid aan van welke theorie je oefeningen
				wilt
				maken en test je kennis.</p>
		</a>
	</section>
	<section>
		<a href="./oefenExamen.php" class="noLinkStyle">
			<h2>Theoretisch examen oefenen</h2>
			<p>Indien je denkt klaar te zijn, kun je je kennis testen door het oefenexamen te proberen. We vertellen
				hier ook wat je fout hebt, maar pas op het einde.</p>
		</a>
	</section>
</article>
<?php
htmlEnd();
?>
