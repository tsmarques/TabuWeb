//GERAR OS NUMEROS PARA AS CONTAS, DE ACORDO COM A DIFICULDADE

function sum(dif) {
	document.getElementById("buttonOK").disabled = ""; // DESABILITAR BUTAO DE OK ENQUANTO GERA UMA CONTA
	document.getElementById("resposta").focus(); //MANTER FOCUS NA CAIXA DE RESPOSTA
	if (dif === "1") {
		var n1 = Math.floor((Math.random() * 10) + 1);
		var n2 = Math.floor((Math.random() * 10) + 1);
		document.getElementById("contas").innerHTML = n1 + " + " + n2;
		startCount();
	} else if (dif === "2") {
		var n1 = Math.floor((Math.random() * 20) + 10);
		var n2 = Math.floor((Math.random() * 20) + 10);
		document.getElementById("contas").innerHTML = n1 + " + " + n2;
		startCount();
	} else if (dif === "3") {
		var n1 = Math.floor((Math.random() * 40) + 20);
		var n2 = Math.floor((Math.random() * 40) + 20);
		document.getElementById("contas").innerHTML = n1 + " + " + n2;
		startCount();
	} else if (dif === "4") {
		var n1 = Math.floor((Math.random() * 100) + 40);
		var n2 = Math.floor((Math.random() * 100) + 40);
		document.getElementById("contas").innerHTML = n1 + " + " + n2;
		startCount();
	}
}

function subtract(dif) {
	document.getElementById("buttonOK").disabled = "";
	document.getElementById("resposta").focus();
	if (dif === "1") {
		var fim = false;
		while(fim === false){
			var n1 = Math.floor((Math.random() * 10) + 1);
			var n2 = Math.floor((Math.random() * 10) + 1);
			
			if(n1 >= n2){
				document.getElementById("contas").innerHTML = n1 + " - " + n2;
				fim = true;
			}
		}
		startCount();
	}
	else if(dif === "2") {
		var fim = false;
		while(fim == false){
			var n1 = Math.floor((Math.random() * 20) + 10);
			var n2 = Math.floor((Math.random() * 20) + 10);
			
			if(n1 >= n2){
				document.getElementById("contas").innerHTML = n1 + " - " + n2;
				fim = true;
			}
		}
		startCount();
	}
	else if(dif === "3") {
		var fim = false;
		while(fim == false){
			var n1 = Math.floor((Math.random() * 40) + 20);
			var n2 = Math.floor((Math.random() * 40) + 20);
			
			if(n1 >= n2){
				document.getElementById("contas").innerHTML = n1 + " - " + n2;
				fim = true;
			}
		}
		startCount();
	}
	else if(dif === "4"){
		var fim = false;
		while(fim == false){
			var n1 = Math.floor((Math.random() * 70) + 40);
			var n2 = Math.floor((Math.random() * 70) + 40);
			
			if(n1 >= n2){
				document.getElementById("contas").innerHTML = n1 + " - " + n2;
				fim = true;
			}
		}
		startCount();
	}
	
}

function multiply(dif) {
	document.getElementById("buttonOK").disabled = "";
	document.getElementById("resposta").focus();
	
	if (dif === "1") {
		var n1 = Math.floor((Math.random() * 5) + 1);
		var n2 = Math.floor((Math.random() * 5) + 1);
		document.getElementById("contas").innerHTML = n1 + " x " + n2;
		startCount();
	} else if (dif === "2") {
		var n1 = Math.floor((Math.random() * 6) + 5);
		var n2 = Math.floor((Math.random() * 6) + 5);
		document.getElementById("contas").innerHTML = n1 + " x " + n2;
		startCount();
	} else if (dif === "3") {
		var n1 = Math.floor((Math.random() * 10) + 6);
		var n2 = Math.floor((Math.random() * 10) + 6);
		document.getElementById("contas").innerHTML = n1 + " x " + n2;
		startCount();
	} else if (dif === "4") {
		var n1 = Math.floor((Math.random() * 20) + 10);
		var n2 = Math.floor((Math.random() * 20) + 10);
		document.getElementById("contas").innerHTML = n1 + " x " + n2;
		startCount();
	}
}

function divide(dif) {
	document.getElementById("buttonOK").disabled = "";
	document.getElementById("resposta").focus();
	
	if (dif === "1") {
		var fim = false;
		while(fim == false) {
			var n1 = Math.floor((Math.random() * 5) + 1);
			var n2 = Math.floor((Math.random() * 5) + 1);
			
			if((n1 % n2) === 0){
				document.getElementById("contas").innerHTML = n1 + " &divide " + n2;
				fim = true;
			}
		}
		startCount();
		
	} 
	else if (dif === "2") {
		var fim = false;
		while(fim == false) {
			var n1 = Math.floor((Math.random() * 10) + 1);
			var n2 = Math.floor((Math.random() * 10) + 1);
			
			if((n1 % n2) === 0){
				document.getElementById("contas").innerHTML = n1 + " &divide " + n2;
				fim = true;
			}
		}
		startCount();
		
	} 
	else if (dif === "3") {
		var fim = false;
		while(fim == false) {
			var n1 = Math.floor((Math.random() * 30) + 1);
			var n2 = Math.floor((Math.random() * 30) + 1);
			
			if((n1 % n2) === 0){
				document.getElementById("contas").innerHTML = n1 + " &divide " + n2;
				fim = true;
			}
		}
		startCount();
	} 
	
	else if (dif === "4") {
		var fim = false;
		while(fim == false) {
			var n1 = Math.floor((Math.random() * 50) + 1);
			var n2 = Math.floor((Math.random() * 50) + 1);
			
			if(((n1 % n2) === 0) && n1 != n2){
				document.getElementById("contas").innerHTML = n1 + " &divide " + n2;
				fim = true;
			}
		}
		startCount();
	}
}