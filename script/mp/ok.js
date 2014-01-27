//verificar se a resposta está certa ou errada
function getAnswerMulti() {
	//DE CADA VEZ QUE RECEBE UMA RESPOSTA,PARA O CONTADOR
	
	stopCount(temporizador);
	
	// ENQUANTO ANALISA A RESPOSTA DESABILITA O BOTAO DE RESPOSTA
	document.getElementById("buttonOK").disabled = "true";
	
	// RESPOSTA DO UTILIZADOR
	var resp = document.getElementById("resposta").value;

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
	if (operation === "plus")
		var res = parseInt(v1) + parseInt(v2);
	else if (operation === "sub")
		var res = parseInt(v1) - parseInt(v2);
	else if (operation === "mult")
		var res = parseInt(v1) * parseInt(v2);
	else if (operation === "divi")
		var res = parseInt(v1) / parseInt(v2);

	// SE A RESPOSTA ESTIVER CERTA
	if (parseInt(resp) === res)
		processResultMulti(true, res, false);
	// RESPOSTA ERRADA
	else
		processResultMulti(false, res, false);

}
//processar os pontos
pontos = 0;
function processResultMulti(isCorrect,res,isTimeOut) {
	var tempoResposta = init;
	init = 0;
	if (isCorrect === true) { // SE A RESPOSTA ESTA CERTA
		var score = 2*(30-tempoResposta); // PONTOS DA JOGADA
		pontos = pontos + score; // PONTOS TOTAIS
		notify(pontos);
		if (pontos >= "444") { // SE OS PONTOS FOREM MAIORES QUE A "BARRA DE PONTOS"
			document.getElementById("background1").style.marginLeft = "444px";
		} 
		else { // AINDA NAO CHEGOU AO FIM
			document.getElementById("background1").style.marginLeft = pontos
					+ "px";
			document.getElementById("contas").innerHTML = "Boa acertaste!";
			if (operation === "plus") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					sum(dif);
				}, 1000);
			} else if (operation === "sub") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					subtract(dif);
				}, 1000);
			} else if (operation === "mult") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					multiply(dif);
				}, 1000);
			} else if (operation === "divi") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					divide(dif);
				}, 1000);
			}
		}
	}
		else { // SE A RESPOSTA ESTA ERRADA(PASSOU DO TEMPO OU NAO)
		if (isTimeOut === true) { // SE PASSOU DO TEMPO
			document.getElementById("contas").innerHTML = "Acabou o Tempo!";
			if (operation === "plus") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					sum(dif);
				}, 1000);
			} else if (operation === "sub") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					subtract(dif);
				}, 1000);
			} else if (operation === "mult") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					multiply(dif);
				}, 1000);
			} else if (operation === "divi") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					divide(dif);
				}, 1000)
			}
		} 
		
		else { // SE NAO PASSOU DO TEMPO E ESTA ERRADA
			if(dif === "3")
				document.getElementById("contas").style.fontSize = "16px";
			document.getElementById("contas").innerHTML = "Errado!\n A resposta era " + res;
			if (operation === "plus") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					sum(dif);
				}, 1000);
			} else if (operation === "sub") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					subtract(dif);
				}, 1000);
			} else if (operation === "mult") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					multiply(dif);
				}, 1000);
			} else if (operation === "divi") {
				document.getElementById("resposta").value = "";
				setTimeout(function() {
					divide(dif);
				}, 1000)
			}
		}
	}
}