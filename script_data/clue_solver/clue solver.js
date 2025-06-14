
<!DOCTYPE html>
<html>
<head>
	<title>RuneApps Clue Solver</title>
	<link rel="icon" href="icon.png" type="image/x-icon"/>
	<link rel="stylesheet" type="text/css" href="/nis/nis.css"/>
	<link rel="stylesheet" type="text/css" href="/nis/alt1-currentskin/skinstyle.css"/>
	<link rel="stylesheet" type="text/css" href="/runeappslib.css"/>
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
	<style type="text/css">
		input[type="radio"] { vertical-align:bottom; border:0;}
		input[type="color"] {vertical-align: middle;background:none;}
		a { color:white; }

		#headbar { position:absolute; top:0px; left:0px; right:0px; height:42px; background:url('/nis/alt1-currentskin/background.png'); z-index:1; }
		#root { position:absolute; top:42px; left:0px; right:0px; bottom:0px; }
		#mapframe { position:absolute; top:0px; left:0px; width:100%; height:100%; }
		.scopeframe { display:none; }

		.imgclockwise { width:16px; height:16px; background:url('/apps/ttsolver/nisclockwise.png') no-repeat; display:inline-block; }
		.imgcclockwise { width:16px; height:16px; background:url('/apps/ttsolver/niscclockwise.png') no-repeat; display:inline-block; }
		#knotwrapper { position:absolute; top:0px; left:0px; right:0px; bottom:0px; display:flex; justify-content:center; align-items:center; }
		#maincanvas { max-width:100%; max-height:100%; }
		#knotresult { position:absolute; top:16px; left:0px; right:0px; margin:8px; padding:8px; }
		#settingsbutton { position:absolute; top:5px; right:3px; background-image:url('/apps/slidesolver/settingsbutton.png'); }
		#settingsdiv { position:absolute; bottom:64px; left:50%; width:190px; max-height: calc(100% - 40px); overflow-y: auto; display:none; padding:5px; margin-left:-105px; z-index:1; }
		#listoutput { position:absolute; left:50%; margin-left:-117px; width:217px; top:23px; bottom:75px; display:none; padding:5px; overflow-y:auto; }
		.listoutputstep { display:inline-block; width:50px; }
		#slidefoot { position:absolute; bottom:0px; height:68px; left:0px; right:0px; background:url('/nis/alt1-currentskin/background.png'); z-index:2; }
		#slidestatus { position:absolute; top:7px; left:10px; right:5px; font-size:15px; color:var(--nis-col-std); }
		#slidestartbutton { position:absolute; top:25px; left:5px; right:5px; }
		#mapbox { position:absolute; top:0px; left:0px; right:0px; bottom:68px; background:radial-gradient(#6C6C6C, #282D34); }
		#maproot { position:absolute; width:245px; height:245px; margin:-122px -122px; left:50%; top:50%; }
		.maptile { position:absolute; background-position:center; border:1px solid rgba(186, 194, 221, 0.5); width:47px; height:47px; text-align:center; transition:left 0.3s, top 0.2s }
		.maptile.complete { border:none; width:49px; height:49px; }
		
		.tabcontent { position:absolute; top:0px; left:0px; right:0px; bottom:0px; padding:25px 10px 10px;}
		.gradienttab { display:flex; align-items:center; justify-content:center; background:radial-gradient(#6C6C6C, #282D34); }
		
		#solvepaste { font-size:22px; line-height:40px; color:var(--nis-col-std); display:none; text-align:center; white-space:nowrap; }
		#solvepaste.blur { color:var(--nis-col-faded); }
		
		#tabcontainer{float:right; display:flex; max-width:100%;}
		
		#toggleunlocktrack{position:absolute; width:20px; height:20px; background-image:url('lockicon.png'); background-size: 40px 20px; top:5px; }
		#toggleunlocktrack.enabled{background-position: right;}
		.mainsettingsbutton{position:absolute; width:20px; height:20px;left:8px;top:5px;background-size: contain; background-image:url('./settings.png');}

		.langselect{position:absolute;bottom:10px;right:10px;}
		.langselect-lang{cursor: pointer;padding:0.3em;float:right;}
		.langselect-lang>img{height:1.2em;vertical-align: bottom;}
		.langselect-lang--selected{background:rgba(255,255,255,0.25);}

		.totem{margin:0.5em auto; padding:0.3em; border:1px solid rgba(255,255,255,0.5); cursor: pointer; background:#770000; width:15em; text-align: center;}
		/*.totem::before{width:1em;height:1em;background:url('totem.png');background-size: cover; content: "";display: inline-block;}*/
		.totem--active{background: #004c00;}

		.helpicon{width: 1.2em;height:1.2em; border:none;background: url('./help.png'); background-size: contain; display:inline-block; margin-left: 0.3em; vertical-align: -0.3em;}

		.donatebutton{padding:0.3em 1.2em; font-weight: bold; border-radius: 1em; background:#dfaf10;text-decoration: none;color:black;display: inline-block;}
		.donatebutton:hover{background:#ecc133;}
	</style>
</head>
<body class="nis">
	<div id="app"></div>
	<script src="app.bundle.js"></script>
</body>
</html>

function solveCelticKnot() { return "Manually rotate the knot until all lines align."; }
module.exports = { solveCelticKnot };








