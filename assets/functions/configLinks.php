<?php

function getLinks()
{
	return array(
		"index.php"       => array("name" => "Welkom", "inLinks" => "true"),
		"theorie.php"     => array("name" => "Theorie", "inLinks" => "true"),
		"oefeningen.php"  => array("name" => "Oefeningen", "inLinks" => "true"),
		"oefenExamen.php" => array("name" => "Oefenexamen", "inLinks" => "true"),
		"result.php"     => array("name" => "Resultaat", "inLinks" => "false"),
		"about.php"       => array("name" => "Over ons", "inLinks" => "true"),
		"contact.php"     => array("name" => "Contact", "inLinks" => "true"),
	);
}

?>