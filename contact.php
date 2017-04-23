<?php

require_once("./assets/functions/configLinks.php");
require_once("./assets/functions/htmlfunctions.php");

if (isset($_POST["submit"]))
{
	if (!empty($_POST["mail"]) && !empty($_POST["name"]) && !empty($_POST["sub"]) && !empty($_POST["mess"]))
	{
		$mail = htmlentities($_POST["mail"]);
		$name = htmlentities($_POST["name"]);
		$sub = htmlentities($_POST["sub"]);
		$mess = htmlentities($_POST["mess"]);

		$headers = "From: william.verhaeghe@student.howest.be";

		//mail("william.verhaeghe@student.howest.be", "[Rijbewijs website]$sub", "van: $name ($mail)\r\nover:$sub\r\n$mess", $headers);
	}
}

htmlIntro();
?>
<article>
	<section>
		<h1>Contact</h1>
		<p>Indien u contact met ons wenst op te nemen, kunt u dit doen door het volgende formulier volledig in te vullen
			en op verzenden te klikken. Ik hoor graag feedback of andere nuttige informatie. Ik doe mijn best om zo snel
			mogelijk te antwoorden. Vergeef mij als dit niet dezelfde dag is.</p>
	</section>
	<section>
		<h2>Formulier</h2>
		<form action="<?php echo $_SERVER["REQUEST_URI"]; ?>" method="post">
			<label for="mail">Uw e-mail: </label><input type="email" id="mail" name="mail"
			                                            placeholder="Voorbeeld@domein.com" required/>
			<br/><label for="name">Uw volledige naam: </label><input type="text" id="name" name="name"
			                                                         placeholder="Voorbeeld Peeters" required/>
			<br/><label for="sub">Het onderwerp van uw bericht: </label><input type="text" id="sub" name="sub"
			                                                                   placeholder="Onderwerp" required/>

			<br/><label for="mess">Uw bericht: </label>
			<br/><textarea id="mess" name="mess" required>Beste</textarea>
			<p>Gelieve geen html te gebruiken in uw bericht.</p>
			<input type="submit" value="Verzenden" class="changing button"/>
		</form>
	</section>
</article>
<?php
htmlEnd()
?>
