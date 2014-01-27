// ABANDONAR O JOGO
function stopGame() {
	if(isMulti === false) {
		alert("Deixaste o Jogo!");
		document.location.reload(true);
	}
	else {
		alert("Deixaste o Jogo!");
		var login = "nick=" + nick + "&key=" + key;
		var req = new XMLHttpRequest();
		req.open("get", "http://www.dcc.fc.up.pt:8080/TabuWeb/rest/leave?" + login + "&game=" + gameID, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.onreadystatechange = function() {
			if(req.readyState == 4) {
				source.close();
			}
		}
		req.send(null);
		document.location.reload(true);	
	}
}