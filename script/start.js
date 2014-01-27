//VALIDAR DADOS E COMECAR O JOGO
nome = document.getElementById("nick").value; // NICKNAME / VARIAVEL GLOBALs
function validate() {
	isMulti = false;
	//RECEBE AS OPERCOES ARITMETICAS
	radio = document.getElementsByName("op");
	multiplayer = document.getElementById("multip");

	// VERIFICA SE FOI ATRIBUIDO UM NICKNAME
	if (document.getElementById("nick").value == "") {
		alert("Faltam preencher dados!");
		return 0;
	}

	// VERIFICA SE FOI ESCOLHIDA UMA OPERACAO
	var isValidated = false;
	for ( var x = 0; x < radio.length; x++) {
		if (radio[x].checked) {
			isValidated = true;
		}
	}
	if (isValidated == false) { // SE FALTAR ALGO
		alert("Faltam preencher dados!");
		return 0;
	}
	// SE TUDO ESTIVER PREENCHIDO COMECA O JOGO
	start();
}

function start() {
	// DISABLE/ENABLE DO PAINEL DE CONTROLO
	document.getElementById("begin").disabled = "true";
	document.getElementById("abandon").disabled = "";
	document.getElementById("nick").disabled = "true";
	document.getElementById("menuDif").disabled = "true";
	
	// DISABLE DOS RADIO BUTTONS
	document.getElementById("sub").disabled = "true";
	document.getElementById("plus").disabled = "true";
	document.getElementById("mult").disabled = "true";
	document.getElementById("divi").disabled = "true";

	// FAZER LOAD DAS ESCOLHAS DE JOGO
	
	difi = document.getElementById("menuDif").value; // MENU DIFICULDADE / VARIAVEL GLOBAL
	var radioButtons = document.getElementsByName("op"); // OPERACAO

	// VERFICAR A OPERACAO ESCOLHIDA
	for ( var x = 0; x < radioButtons.length; x++) {
		if (radioButtons[x].checked)
			radio_choice = radioButtons[x].id;
	}
	// CHAMAR FUNCAO DA OPERACAO PARA GERAR UMA CONTA
	if (radio_choice === "plus") {
		makeDesign(difi); // CRIAR CENARIO
		setTimeout(function() {
			sum(difi);
		}, 500);
	} 
	
	else if (radio_choice === "sub") {
		makeDesign(difi);
		setTimeout(function() {
			subtract(difi);
		}, 500);
	} 
	
	else if (radio_choice === "mult") {
		makeDesign(difi); // CRIAR CENARIO
		setTimeout(function() {
			multiply(difi);
		}, 500);
	} 
	
	else if (radio_choice === "divi") {
		makeDesign(difi); // CRIAR CENARIO
		setTimeout(function() {
			divide(difi);
		}, 500);
	}

}