
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


module.exports = {
  xp: {
    "attack": "500000",
    "strength": "600000",
    "defence": "450000",
    "hitpoints": "700000",
    "ranged": "300000",
    "magic": "400000"
  },
  updateXP: function(skill, value) {
    this.xp[skill.toLowerCase()] = value;
    return this.xp[skill.toLowerCase()];
  }
};





