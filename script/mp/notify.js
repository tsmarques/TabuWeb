function notify(points) {
	var login = "nick=" + nick + "&key=" + key;
	var gameInfo = "&game=" + gameID + "&points=" + points;
	var req = new XMLHttpRequest();
	req.open("get", "http://www.dcc.fc.up.pt:8080/TabuWeb/rest/notify?" + login + gameInfo, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.onreadystatechange = function() {
		if (req.readyState == 4) { 
			return; 
		}
	}
	req.send(null);
}