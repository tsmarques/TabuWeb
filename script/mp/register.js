function register() {
	nick = document.getElementById("nameInput").value;
	key = document.getElementById("passInput").value;
	var rad = document.getElementsByName("op");
	operation = 0;
	dif = document.getElementById("menuDif").value;

	//alert(nick + " " + key);
	if(key == "" || nick == "") {
		alert("Faltam preencher dados");
		return 0;
	}
	var isValidated = false;
	for ( var x = 0; x < rad.length; x++) {
		if (rad[x].checked) {
			operation = rad[x].id;
			isValidated = true;
		}
	}
	if (isValidated == false) { // SE FALTAR ALGO
		alert("Faltam preencher dados!");
		return 0;
	}

	if(nick.charAt(0) == '<') {
		alert("Caracter nao permitido: <");
		return 0;
	}
	var params = "nick=" + nick + "&key=" + key;
	var req = new XMLHttpRequest();
	req.open("get", "http://www.dcc.fc.up.pt:8080/TabuWeb/rest/register?" + params, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.onreadystatechange = function() {
		if (req.readyState == 4) { 
			var serverResponse = req.responseText;
			var JSONobj = JSON.parse(serverResponse);
			if(serverResponse !='{}') 
				alert(JSONobj.error);
			
			else {
				// remover elementos do login
				cen.removeChild(newDiv);
				makeDesign(dif); // CRIAR CENARIO
				join();
				return;
			} 
		}
	}
	req.send(null);
}