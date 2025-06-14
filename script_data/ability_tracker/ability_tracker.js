
<!DOCTYPE html>
<html>
<head>
	<title>Alt1 ability tracker</title>
	<link rel="icon" href="icon.png"/>
	<link rel="stylesheet" type="text/css" href="/nis/alt1-currentskin/skinstyle.css" />
	<link rel="stylesheet" type="text/css" href="/runeappslib.css" />
	<link rel="stylesheet" type="text/css" href="/nis/nis.css" />
</head>
<body class="nis minimal">
	<div id="root"></div>
	<script type="text/javascript" src="index.bundle.js"></script>
</body>
</html>

function trackAbility(abilityName) { return `Monitor the cooldown of "${abilityName}" manually.`; }
module.exports = { trackAbility };








