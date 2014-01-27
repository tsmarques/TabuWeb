function update() {
	var login = "nick=" + nick + "&key=" + key;
	var game = "&game=" + gameID;
	source = new EventSource('http://www.dcc.fc.up.pt:8080/TabuWeb/rest/update?' + login + game);	
	source.onmessage = function(event) {
		var JSONobj = JSON.parse(event.data);
		if(typeof JSONobj.time === 'undefined') {
			document.getElementById("contas").innerHTML = "A espera de Jogador";
			document.getElementById("buttonOK").disabled = "true";
			document.getElementById("resposta").disabled = "true";
		}
		else if(JSONobj.time >= -4000 && JSONobj.time < 0) {
			document.getElementById("buttonOK").disabled = "true";
			document.getElementById("resposta").disabled = "true";
			document.getElementById("contas").innerHTML = "O Jogo vai come&#231;ar!";
			document.getElementById("tempo").innerHTML = JSONobj.time / -1000;
		}

		else if(JSONobj.time == 0) {
			document.getElementById("contas").innerHTML = "Comecem!";
			callOperation();
			document.getElementById("buttonOK").disabled = "";
			document.getElementById("resposta").disabled = "";
		}
		else if (JSONobj.time > 0) {
			if(JSONobj.winner != null) {
				stopCount();
				document.getElementById("buttonOK").disabled = "true";
				document.getElementById("resposta").disabled = "true";
				if(JSONobj.winner === nick) {
					document.getElementById("background1").style.marginLeft = "444px";
					document.getElementById("contas").innerHTML = "Venceste com " + pontos;
					}
				else {
					document.getElementById("background2").style.marginLeft = "444px";
					document.getElementById("contas").innerHTML = "Perdeste!";
					}
					setTimeout(function(){rankingM();}, 2000);
			}
			else {
				var keys = Object.keys(JSONobj.points);
				if(keys.length == 1) {
					if(nick === keys[0]) {
						document.getElementById("contas").innerHTML = "Adversário Abandonou o Jogo";
						rankingM();
					}
				}
				else {
					for(var i = 0; i < keys.length; i++) {
						if(keys[i] !== nick) {
							var player2 = JSONobj.points[keys[i]];
							document.getElementById("background2").style.marginLeft = player2
							+ "px";
						}
					}
				}
			}
		}
	}
}