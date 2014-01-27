//DEFINE TEMPORIZADOR DO JOGO

init = 0; // CONTADOR
fim = false;
function startCount() {
	document.getElementById("tempo").innerHTML = init;
	if (init === 30 && fim === false) { // se o tempo acabou
		stopCount(temporizador);
		document.getElementById("contas").innerHTML = "Tempo Acabou!";
		document.getElementById("buttonOK").disabled = "true";
		if(isMulti === false)
			processResult(difi,false,0,true);
		else
			processResultMulti(false,0,true);
		init = 0;
	} else {
		init = init + 1;
		temporizador = setTimeout(function() {
			startCount();
		}, 1000);
	}
}

function stopCount(temp) {
	clearTimeout(temp);
}