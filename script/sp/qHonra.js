// QUADRO DE HONRA E RESPECTIVOS DADOS E DESIGN
//PARA JA TENHO UM QUADRO DE HONRA GERAL, NAO FILTREI POR DIFICULDADE NEM OPERACAO

pont = Array(5);
names = Array(5);
iT = 0;
function QuadroHonra() {
	document.getElementById("cenario").style.backgroundImage = "url('images/qHonra.jpg')";
	document.getElementById("honra").style.visibility = "visible";
	document.getElementById("goBack").style.visibility = "visible";

	document.getElementById("answer").style.visibility = "";
	document.getElementById("jogo").style.visibility = "";
	document.getElementById("time").style.visibility = "";
	document.getElementById("player1").style.visibility = "";
	document.getElementById("player2").style.visibility = "";

	if(iT < 5){
		pont[iT] = nPontos;
		names[iT] = nome; // VARIAVEL GLOBAL
		iT++;
	}
	else { // SE O VECTOR JA TIVER 5 RESULTADOS MAS APARECER UM MELHOR
		if(nPontos > pont[5]){
			pont[5] = nPontos;
			names[5] = nome;			
		}	
	}

	var tempP;
	var tempN;
	for(var j = 0; j < iT-1; j++){
		for(var x = 0; x < iT-1; x++){
			if(pont[x] < pont[x+1]){
				tempP = pont[x];
				tempN = names[x];
			
				pont[x] = pont[x+1];
				names[x] = names[x+1];
				pont[x+1] = tempP;
				names[x+1] = tempN;
			}	
		}
	}
	
	
	var table = document.getElementById("honra");
	
	while ( table.rows.length > 1 ) {
	  table.deleteRow(1);
	 }
	
	var j = 0;
	while(j < 5){
		var row = table.insertRow(j+1);
		
		var cellPlace = row.insertCell(0);
		var cellName = row.insertCell(1);
		var cellPont = row.insertCell(2);
	
		
		if('undefined' != typeof pont[j]){
			cellPlace.innerHTML = j+1;
			cellName.innerHTML = names[j];
			cellPont.innerHTML = pont[j];
		}
		j++;
	}
}

function ReStart() {
	// VERIFICAR POSICAO DA TABELA - MUDAR DE WHILE PARA FOR
	// MUDAR FUNDO PARA O INICIAL
	
	//RESTABELECER FUNDO ORIGINAL
	document.getElementById("cenario").style.backgroundImage = "url('images/cenarioMain.jpg')";
	
	//DISABLE DA TABELA E DO BUTAO PARA VOLTAR A JOGAR
	document.getElementById("honra").style.visibility = "";
	document.getElementById("goBack").style.visibility = "";
	
	// RESTABLECER PAINEL DE CONTROLO
	document.getElementById("begin").disabled = "";
	document.getElementById("abandon").disabled = "";
	document.getElementById("nick").disabled = "";
	document.getElementById("menuDif").disabled = "";
	// RESTABELECER OS RADIO BUTTONS
	document.getElementById("sub").disabled = "";
	document.getElementById("plus").disabled = "";
	document.getElementById("mult").disabled = "";
	document.getElementById("divi").disabled = "";
	
	//LIMPAR LABEL DAS CONTAS E CAIXA DE RESPOSTA
	document.getElementById("contas").innerHTML = " ";
	document.getElementById("resposta").value = "";
	
	//REINICIAR PONTUCAO
	nPontos = 0;
	player2 = 0;
	
	//REINICIAR POSICAO DOS AVATARES
	document.getElementById("background1").style.marginLeft = "0px";
	document.getElementById("background2").style.marginLeft = "0px";
}