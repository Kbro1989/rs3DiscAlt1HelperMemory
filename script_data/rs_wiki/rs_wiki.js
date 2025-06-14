
<!DOCTYPE html>
<html>
<head>
	<title>RS Wiki</title>
	<link rel="icon" href="icon.png" type="image/x-icon" />
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="/runeappslib.css"/>
	<link rel="stylesheet" type="text/css" href="/nis/nis.css"/>
	<link rel="stylesheet" type="text/css" href="/nis/alt1-currentskin/skinstyle.css"/>
	<script type="text/javascript" src="/runeappslib.js"></script>
	<script type="text/javascript" src="/alt1lib.js"></script>
	<script type="text/javascript" src="index.js"></script>
	<script type="text/javascript" src="htmlparser.js"></script>
	<script type="text/javascript" src="parser.js"></script>
	<style type="text/css">
		#nameouter{position:absolute; top:3px; left:3px; right:40px; height:25px;}
			#nameinput{position:absolute; width:100%; height:100%; opacity:0; cursor:pointer; z-index:1; color:var(--nis-col-std); font-size:24px; white-space:nowrap; background:url('/nis/alt1-currentskin/background.png'); border:1px solid rgba(128,128,128,0.5); font-family:serif; outline:none;}
			#itemname{width:100%; height:100%; position:absolute; color:var(--nis-col-std); font-size:24px; white-space:nowrap; font-family:serif; padding:1px;}
		#wikibutton{position:absolute; top:12px; right:4px; background-image:url(wikibutton.png);}
		#contentouter{position:absolute; top:37px; left:0px; right:0px; bottom:0px; background:var(--nis-col-backsub); color:var(--nis-col-low); padding:25px 5px 5px; text-align:justify; overflow-y:auto; overflow-x:hidden; font-family:sans-serif; font-size:12px;}
		.tabcontent{}
		#gecontent{display:none; float:left; clear:left;}
		
			.wikiquote{padding:0px 30px; position:relative;}
				.wikiquotestart{position:absolute; left:5px; top:0px; color:var(--nis-col-std); font-size:40px; font-family:serif;}
				.wikiquoteend{position:absolute; right:5px; bottom:-20px; color:var(--nis-col-std); font-size:40px; font-family:serif;}
			.wikilink{text-decoration:underline; color:var(--nis-col-url); cursor:pointer;}
			.wikiheader{font-size:18px; font-weight:bold; color:var(--nis-col-std);}
			.wikihorline{margin:5px 7px 10px; height:1px; background:var(--nis-col-std);}
			.wikitable{border:1px solid #666;}
				.wikitable tr:nth-child(even){background:rgba(255,255,255,0.1);}
				.wikitable tr:nth-child(odd){background:rgba(255,255,255,0.15);}
				.wikitable th{color:var(--nis-col-std);}
			.tabcontent ul, .tabcontent ol{margin:0px; padding-left:20px;}
			.editsection{display:none;}
			.floatright{clear:right; float:right; max-width:20%; max-width:20vw; margin:5px 0px 5px 10px;}
			.floatleft{clear:left; float:left; max-width:20%; max-width:20vw; margin:5px 10px 5px 0px;}
			.floatright img, .floatleft img{max-width:100%; height:initial;}
			.wiki-bonuses img{max-width:20vw; height:initial;}
			.wiki-monster{
    text-align: center;
}
			.wiki-monster img{max-width:20vmin; height:initial;}
			.wiki-bonuses th{width:70px !important;}
	</style>
</head>
<body class="nis" onload="start()">
	<div id="nameouter">
		<input id="nameinput" spellcheck="false" onclick="this.style.opacity=1;" onblur="this.style.opacity=0; this.value='';" onkeydown="if(event.keyCode==13){loadobject(this.value); this.blur();}" oninput="if(startcaps(this.value)!=this.value){this.value=startcaps(this.value);}"/>
		<div id="itemname">Click here to search</div>
	</div>
	<div id="wikibutton" class="nissmallimagebutton" title="View in default browser" onclick="openWiki();"></div>
	<div class="nisseperator" style="top:35px; padding-right:10px;">
		<div style="width:10px; height:1px; float:right;"></div>
		<div id="contenttab0" onclick="settab(0);" class="contenttab activetab">Article</div>
		<div id="contenttab1" onclick="settab(1);" style="display:none;" class="contenttab">Stats</div>
		<div id="contenttab2" onclick="settab(2);" style="display:none;" class="contenttab">Item</div>
		<div id="contenttab3" onclick="settab(3);" style="display:none;" class="contenttab">Info</div>
		<div id="contenttab4" onclick="settab(4);" style="display:none;" class="contenttab">Drops</div>
	</div>
	<div id="contentouter">
		<div id="tabcontent0" class="tabcontent">
			<div id="gecontent"></div>
			<span id="wikicontent"></span>
		</div>
		<div id="tabcontent1" class="tabcontent" style="display:none;"></div>
		<div id="tabcontent2" class="tabcontent" style="display:none;"></div>
		<div id="tabcontent3" class="tabcontent" style="display:none;"></div>
		<div id="tabcontent4" class="tabcontent" style="display:none;"></div>
	</div>
</body>
</html>
function searchWiki(query) { return `Search the RuneScape wiki for "${query}" to find details.`; }
module.exports = { searchWiki };