<?php

require_once("./assets/functions/configLinks.php");
require_once("./assets/functions/htmlfunctions.php");

if (empty($_GET["type"]))
{
	header("Location:./index.php");
}

htmlIntro("results");
?>
<article>
	<section>
		<h1>Uw resultaat</h1>
		<p>U heeft zonet enkele oefeningen gemaakt. Hier heeft u een handig overzichtje dat de vragen toont met uw
			antwoord en eventueel het juiste antwoord. Hierdoor kunt u de gepaste theorie herbekijken en gericht
			leren. U kunt deze pagina afdrukken door <a href="#" id="print" class="normal">hier</a> te klikken.</p>
	</section>
	<section id="resultSection" class="lower results"></section>
</article>
<article>
	<section id="answersSection"></section>
</article>
<script>
	var type = "<?php echo $_GET["type"]; ?>";
	var answer = Array();

	<?php
	for ($i = 0; isset($_GET["q$i"]); $i++)
	{
		echo "\tanswer[$i] = " . $_GET["q$i"] . ";\r\n";
	}
	?>
</script>
<?php
htmlEnd();
?>
