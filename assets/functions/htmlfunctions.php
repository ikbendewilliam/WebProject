<?php
function htmlIntro($init = "")
{
	$title = "";
	$links = getLinks();
	$thisUrl = basename($_SERVER["REQUEST_URI"]);
	if (strpos($thisUrl, "?") > 0) // Example: result.php?type=... becomes result.php
	{
		$thisUrl = substr($thisUrl, 0, strpos($thisUrl, "?"));
	}

	foreach ($links as $url => $infoLink)
	{
		if ($thisUrl === $url)
		{
			$title = $infoLink["name"];
		}
	}

	?>
	<!doctype html>
	<html lang="nl">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="./css/nmct.css"/>
		<link rel="stylesheet" href="./css/screen.css"/>
		<link rel="stylesheet" href="./css/screenSmallerThan1600.css" media="screen and (max-width: 1600px)"/>
		<link rel="stylesheet" href="./css/screenSmallerThan800.css" media="screen and (max-width: 800px)"/>
		<link rel="stylesheet" href="./css/screenSmallerThan480.css" media="screen and (max-width: 480px)"/>
		<link rel="stylesheet" href="./css/print.css" media="print"/>

		<?php if ($init === "oefeningen")
		{ ?>
			<script src="./assets/functions/colorChange.js"></script>
			<script src="./assets/functions/getExercises.js"></script>
			<script src="./assets/functions/oefeningen.js"></script>
		<?php } elseif ($init === "examen")
		{ ?>
			<script src="./assets/functions/colorChange.js"></script>
			<script src="./assets/functions/getExercises.js"></script>
			<script src="./assets/functions/examen.js"></script>
		<?php } elseif ($init === "results")
		{ ?>
			<script src="./assets/functions/colorChange.js"></script>
			<script src="./assets/functions/getExercises.js"></script>
			<script src="./assets/functions/results.js"></script>
		<?php } ?>
		<title>Rijbewijs B | <?php echo $title; ?></title>
	</head>
	<body>
	<header>
		<section>
			<img src="./assets/images/banner.jpg" alt="Traffic sings" width="1600" height="192" class="banner"/>
			<!-- src: https://pixabay.com/en/banner-road-sign-traffic-sign-road-1183382/ -->
		</section>
		<section>
			<nav>
				<ul>
					<?php
					foreach ($links as $url => $infoLink)
					{
						$show = $infoLink["inLinks"];
						$show = ($show === "true") ? true : false;

						$extra = "";
						if ($thisUrl === $url)
						{
							$extra .= ' class="selected"';
							$show = true;
						}
						if ($show)
						{
							?>
							<li>
								<a href="./<?php echo $url; ?>" <?php echo $extra; ?>><?php echo $infoLink["name"]; ?></a>
							</li>
							<?php
						}
					}
					?>
				</ul>
			</nav>
		</section>
	</header>
	<main>
	<?php
}

function htmlEnd()
{ ?>
	</main>
	<footer>
		<p>
			&copy;
			<?php
			date_default_timezone_set("Europe/Brussels");
			echo date("Y");
			?>
		</p>
	</footer>
	<!-- from w3.org
	<p class="w3org">
		<a href="http://jigsaw.w3.org/css-validator/check/referer">
			<img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!"/>
		</a>
	</p>-->
	</body>
	</html>
<?php } ?>