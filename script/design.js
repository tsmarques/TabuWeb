//MUDAR BACKGROUBND E IMAGENS DO JOGO

function makeDesign(dif) {
	// CENARIO JOGO
	document.getElementById("answer").style.visibility = "visible";
	document.getElementById("jogo").style.visibility = "visible";
	document.getElementById("time").style.visibility = "visible";
	document.getElementById("player1").style.visibility = "visible";
	document.getElementById("player2").style.visibility = "visible";
	

	//FACIL
	if(dif === "1"){
		document.getElementById("cenario").style.backgroundImage = "url('images/easy/cenarioEasy.jpg')";
		document.getElementById("background1").style.backgroundImage = "url('images/easy/easy1.png')";
		document.getElementById("background2").style.backgroundImage = "url('images/easy/easy2.png')";
		document.getElementById("contas").style.fontSize = "18px";
		document.getElementById("contas").style.color = 'white';
	}
	//MEDIO
	else if(dif === "2"){
		document.getElementById("cenario").style.backgroundImage = "url('images/medium/cenarioMedium.jpg')";
		document.getElementById("background1").style.backgroundImage = "url('images/medium/medium1.png')";
		document.getElementById("background2").style.backgroundImage = "url('images/medium/medium2.png')";
		document.getElementById("contas").style.fontSize = "18px";
		document.getElementById("contas").style.color = 'white';
	}
	//DIFICIL
	else if(dif === "3"){
		document.getElementById("cenario").style.backgroundImage = "url('images/hard/cenarioHard.jpg')";
		document.getElementById("background1").style.backgroundImage = "url('images/hard/hard1.png')";
		document.getElementById("background2").style.backgroundImage = "url('images/hard/hard2.png')";
		document.getElementById("contas").style.fontSize = "18px";
		document.getElementById("contas").style.color = 'white';
	}
	//MUITO DIFICIL
	else if(dif === "4"){
		document.getElementById("cenario").style.backgroundImage = "url('images/veryHard/cenarioVeryHard.jpg')";
		document.getElementById("background1").style.backgroundImage = "url('images/veryHard/VeryHard1.png')";
		document.getElementById("background2").style.backgroundImage = "url('images/veryHard/VeryHard2.png')";
		document.getElementById("contas").style.fontSize = "16px";
		document.getElementById("contas").style.color = 'white';
	}
}