// FUNCAO DO BOTAO OK DO PAINEL DE JOGO
// VERIFICAR RESPOSTA E DAR PONTUCAO

function getAnswer() {
	//DE CADA VEZ QUE RECEBE UMA RESPOSTA PARA O CONTADOR
	stopCount(temporizador);
	
	// ENQUANTO ANALISA A RESPOSTA DESABILITA O BOTAO DE RESPOSTA
	document.getElementById("buttonOK").disabled = "true";
	
	// RESPOSTA DO UTILIZADOR
	var resp = document.getElementById("resposta").value;

	var dificuldade = document.getElementById("menuDif").value; // GUARDA A DIFICULDADE DO JOGO

	var conta = document.getElementById("contas").innerHTML; // CONTA A FAZER
	var i = 0;
	var v1 = "";
	var v2 = "";

	// LER O 1º VALOR GERADO
	while (conta.charAt(i) != " ") {
		v1 = v1 + conta.charAt(i);
		i++;
	}

	// LER O 2o VALOR GERADO
	var j = i + 3;
	while (j != conta.length) {
		v2 = v2 + conta.charAt(j);
		j++;
	}
	// RESULTADO DA CONTA
	if (radio_choice === "plus")
		var res = parseInt(v1) + parseInt(v2);
	else if (radio_choice === "sub")
		var res = parseInt(v1) - parseInt(v2);
	else if (radio_choice === "mult")
		var res = parseInt(v1) * parseInt(v2);
	else if (radio_choice === "divi")
		var res = parseInt(v1) / parseInt(v2);

	// SE A RESPOSTA ESTIVER CERTA
	if (parseInt(resp) === res) {
		processResult(dificuldade, true, res, false);
	}
	// RESPOSTA ERRADA
	else
		processResult(dificuldade, false, res, false);

}