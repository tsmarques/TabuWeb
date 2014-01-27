function rankingM() {
	document.getElementById("cenario").style.backgroundImage = "url('images/qHonraMulti.png')";
	document.getElementById("goBack").style.visibility = "visible";;

	document.getElementById("answer").style.visibility = "";
	document.getElementById("jogo").style.visibility = "";
	document.getElementById("time").style.visibility = "";
	document.getElementById("player1").style.visibility = "";
	document.getElementById("player2").style.visibility = "";

	var line = "operator=" + opVal + "&difficulty=" + dif + "&goal=" + goal;
	var req = new XMLHttpRequest();
	req.open("get", "http://www.dcc.fc.up.pt:8080/TabuWeb/rest/ranking?" + line, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			var JSONobj = JSON.parse(req.responseText);
			var ranking = JSONobj.ranking;
			processRanking(ranking);
		}
	}
	req.send(null);
}

function processRanking(ranking) {
	document.getElementById("honra").style.visibility = "visible";
	var table = document.getElementById("honra");
	table.deleteRow(0);
	var j = 0;
	var row = table.insertRow(j);
	var rankPos = row.insertCell(0);
	var nick_label = row.insertCell(1);
	var time_label = row.insertCell(2);
	rankPos.innerHTML = "Pos";
	nick_label.innerHTML = "Nick";
	time_label.innerHTML = "Tempo";

	var j = 0;
	for(var i = 0; i < ranking.length; i++) {
		if(i >= 10)
			break;
		else {
			row = table.insertRow(j+1);
			rankPos = row.insertCell(0);
			nick_label = row.insertCell(1);
			time_label = row.insertCell(2);

			rankPos.innerHTML = j+1;
			nick_label.innerHTML = ranking[i].nick;
			time_label.innerHTML = ranking[i].time;
			j++;
		}
	}
	source.close();
}