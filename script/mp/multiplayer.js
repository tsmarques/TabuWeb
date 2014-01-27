// gerar pagina para o register
function startMultiplayer() {
	isMulti = true;
	document.getElementById("begin").disabled = "true";
	document.getElementById("abandon").disabled = "";
	document.getElementById("nick").disabled = "true";
	document.getElementById("multip").disabled ="true";
	document.getElementById("jogo").disabled ="true";
	document.getElementById("answer").disabled ="true";
	document.getElementById("time").disabled ="true";
	document.getElementById("player1").disabled ="true";
	document.getElementById("player2").disabled ="true";


	document.getElementById("cenario").style.backgroundImage = "url('')";


	cen = document.getElementById("cenario");
	newDiv = document.createElement("div");
	newDiv.setAttribute('id', "formulario");

	var nameLabel = document.createElement("label");
	nameLabel.setAttribute('id', "nameLabel");
	nameLabel.appendChild(document.createTextNode("Nome"));
	
	var passLabel = document.createElement("label");
	passLabel.setAttribute('id', "passLabel");
	passLabel.appendChild(document.createTextNode("Password"));

	var nameIn = document.createElement("input");
	nameIn.setAttribute('id', "nameInput");
	nameIn.setAttribute('type', "text");
	
	var passIn = document.createElement("input");
	passIn.setAttribute('id', "passInput");
	passIn.setAttribute('type', "password");

	var submit = document.createElement("button");
	submit.setAttribute('id', 'subButton');
	submit.appendChild(document.createTextNode("Submeter"));
	submit.setAttribute("onclick", "register();");

	newDiv.appendChild(nameLabel);
	newDiv.appendChild(nameIn);
	newDiv.appendChild(passLabel);
	newDiv.appendChild(passIn);
	newDiv.appendChild(submit);
	cen.appendChild(newDiv);
	//document.getElementById("newDiv").style.position = "relative";
	//document.getElementById("newDiv").style.marginBottom = "400px";
}