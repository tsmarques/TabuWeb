goal = 444;
gameID = 0;
function join() {
	opVal = 0;
	difi = document.getElementById("menuDif").value;
	document.getElementById("menuDif").disabled = "true";
	document.getElementById("plus").disabled = "true";
	document.getElementById("sub").disabled = "true";
	document.getElementById("mult").disabled = "true";
	document.getElementById("divi").disabled = "true";


	if( operation === 'plus')
		opVal = '%2B';
	else if( operation === 'sub')
		opVal = '%2D';
	else if( operation === 'mult')
		opVal = '%2A';
	else if( operation === 'divi')
		opVal = '%2F';

	var login = "nick=" + nick + "&key=" + key;
	var gameInfo = "&operator=" + opVal + "&difficulty=" + dif + "&goal=" + goal;
	var req = new XMLHttpRequest();
	req.open("get", "http://www.dcc.fc.up.pt:8080/TabuWeb/rest/join?" + login + gameInfo, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			var JSONobj = JSON.parse(req.responseText);
			gameID =  JSONobj.gameId;
			update();
			return; 
		}
	}
	req.send(null);
}