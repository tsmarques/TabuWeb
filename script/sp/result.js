//PROCESSAR O RESULTADO E AS PONTUCAOES
nPontos = 0; // PONTOS DO JOGADOR
player2 = 0; // PONTOS DO COMPUTADOR/OPONENTE
function processResult(dif,isCorrect, res, timeOut) {
	if (dif === "1") {
		var tempoResposta = init;
		init = 0;
		if (isCorrect === true) { // SE A RESPOSTA ESTA CERTA
			var score = 2*(30-tempoResposta); // PONTOS DA JOGADA
			nPontos = nPontos + score; // PONTOS TOTAIS
			
			if (nPontos >= "444") { // SE OS PONTOS FOREM MAIORES QUE A "BARRA DE PONTOS"
				player2 = player2 + 2*(tempoResposta);
				document.getElementById("background1").style.marginLeft = "444px";
				if (player2 > nPontos) {
					alert("Embora tenhas chegado ao fim, o teu oponente fez mais pontos!");
					QuadroHonra();
				}

				else if (player2 === nPontos) {
					alert("Empate!");
					QuadroHonra();
				}

				else { //GANHOU
					alert("Parabens ganhaste!!! \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				}
			}

			else { // AINDA NAO CHEGOU AO FIM
				player2 = player2 + 2*(tempoResposta);
				document.getElementById("background1").style.marginLeft = nPontos
						+ "px";
				document.getElementById("background2").style.marginLeft = player2
						+ "px";
				document.getElementById("contas").innerHTML = "Boa acertaste!";
				if (radio_choice === "plus") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						sum(dif);
					}, 1000);
				} else if (radio_choice === "sub") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						subtract(dif);
					}, 1000);
				} else if (radio_choice === "mult") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						multiply(dif);
					}, 1000);
				} else if (radio_choice === "divi") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						divide(dif);
					}, 1000);
				}
			}
		}

		else { // SE A RESPOSTA ESTA ERRADA(PASSOU DO TEMPO OU NAO)
			if (timeOut === true) { // SE PASSOU DO TEMPO
				player2 = player2 + 55;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM DO JOGO
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				}
				
				else { // SE NAO CHEGOU AO FIM DO JOGO
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			} 
			
			else { // SE NAO PASSOU DO TEMPO E ESTA ERRADA
				player2 = player2 + 25 + tempoResposta;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} 
				
				else { // SE NAO CHEGOU AO FIM
					document.getElementById("contas").innerHTML = "Errado!\n A resposta era "
							+ res;
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			}
		}
	}

	else if (dif === "2") {
		var tempoResposta = init;
		init = 0;
		if (isCorrect === true) { // SE A RESPOSTA ESTA CERTA
			var score = 2 * (30 - tempoResposta); // PONTOS DA JOGADA
			nPontos = nPontos + score; // PONTOS TOTAIS
			if (nPontos >= "444") {
				player2 = player2 + 2*(tempoResposta) + 10;
				document.getElementById("background1").style.marginLeft = "444px";
				if (player2 > nPontos) {
					alert("Embora tenhas chegado ao fim, o teu oponente fez mais pontos!");
					QuadroHonra();
				}

				else if (player2 === nPontos) {
					alert("Empate!");
					QuadroHonra();
				}

				else {
					alert("Parabens ganhaste!!! \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				}
			}

			else { // AINDA NAO CHEGOU AO FIM
				player2 = player2 + 2*(tempoResposta) + 10;
				document.getElementById("background1").style.marginLeft = nPontos
						+ "px";
				document.getElementById("background2").style.marginLeft = player2
						+ "px";
				document.getElementById("contas").innerHTML = "Boa acertaste!";
				
				//VOLTA A GERAR UM CONTA
				if (radio_choice === "plus") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						sum(dif);
					}, 1000);
				} else if (radio_choice === "sub") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						subtract(dif);
					}, 1000);
				} else if (radio_choice === "mult") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						multiply(dif);
					}, 1000);
				} else if (radio_choice === "divi") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						divide(dif);
					}, 1000);
				}
			}
		}

		else { // SE A RESPOSTA ESTA ERRADA
			if (timeOut === true) { // SE PASSOU DO TEMPO
				player2 = player2 + 65;
				
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM E PASSOU DO TEMPO
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} 
				
				else { //SE AINDA NAO CHEGOU AO FIM E PASSOU DO TEMPO
					document.getElementById("background2").style.marginLeft = player2
							+ "px";
					
					//VOLTA A GERAR UMA CONTA
					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			}
			
			else { // SE NAO PASSOU DO TEMPO
				player2 = player2 + 35 + tempoResposta;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} else {
					document.getElementById("contas").innerHTML = "Errado!\n A resposta era "
							+ res;
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			}
		}

	}

	else if (dif === "3") {
		var tempoResposta = init;
		init = 0;
		if (isCorrect === true) { // SE A RESPOSTA ESTA CERTA
			var score = 2 * (30 - tempoResposta); // PONTOS DA JOGADA
			nPontos = nPontos + score; // PONTOS TOTAIS
			if (nPontos >= "444") {
				player2 = player2 + 2*(tempoResposta) + 10;
				document.getElementById("background1").style.marginLeft = "444px";
				if (player2 > nPontos) {
					alert("Embora tenhas chegado ao fim, o teu oponente fez mais pontos!");
					QuadroHonra();
				}

				else if (player2 === nPontos) {
					alert("Empate!");
					QuadroHonra();
				}

				else {
					alert("Parabens ganhaste!!! \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				}
			}

			else { // AINDA NAO CHEGOU AO FIM
				player2 = player2 + 3*(tempoResposta) + 10;
				document.getElementById("background1").style.marginLeft = nPontos
						+ "px";
				document.getElementById("background2").style.marginLeft = player2
						+ "px";
				document.getElementById("contas").innerHTML = "Boa acertaste!";
				if (radio_choice === "plus") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						sum(dif);
					}, 1000);
				} else if (radio_choice === "sub") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						subtract(dif);
					}, 1000);
				} else if (radio_choice === "mult") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						multiply(dif);
					}, 1000);
				} else if (radio_choice === "divi") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						divide(dif);
					}, 1000);
				}
			}
		}

		else { // SE A RESPOSTA ESTA ERRADA
			if (timeOut === true) {
				player2 = player2 + 75;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} else { // SE AINDA NAO CHEGOU AO FIM
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			} else { // SE NAO PASSOU DO TEMPO E ESTA ERRADA
				player2 = player2 + 45 + tempoResposta;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} else {
					document.getElementById("contas").innerHTML = "Errado!\n A resposta era "
							+ res;
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			}
		}
	}

	else if (dif === "4") {
		var tempoResposta = init;
		init = 0;
		if (isCorrect === true) { // SE A RESPOSTA ESTA CERTA
			var score = 3 * (30 - tempoResposta); // PONTOS DA JOGADA
			nPontos = nPontos + score; // PONTOS TOTAIS
			if (nPontos >= "444") {
				player2 = player2 + 2*(tempoResposta) + 15;
				document.getElementById("background1").style.marginLeft = "444px";
				if (player2 > nPontos) {
					alert("Embora tenhas chegado ao fim, o teu oponente fez mais pontos!");
					QuadroHonra();
				}

				else if (player2 === nPontos) {
					alert("Empate!");
					QuadroHonra();
				}

				else {
					alert("Parabens ganhaste!!! \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				}
			}

			else { // AINDA NAO CHEGOU AO FIM
				player2 = player2 + 2*(tempoResposta) + 15;
				document.getElementById("background1").style.marginLeft = nPontos
						+ "px";
				document.getElementById("background2").style.marginLeft = player2
						+ "px";
				document.getElementById("contas").innerHTML = "Boa acertaste!";
				if (radio_choice === "plus") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						sum(dif);
					}, 1000);
				} else if (radio_choice === "sub") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						subtract(dif);
					}, 1000);
				} else if (radio_choice === "mult") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						multiply(dif);
					}, 1000);
				} else if (radio_choice === "divi") {
					document.getElementById("resposta").value = "";
					setTimeout(function() {
						divide(dif);
					}, 1000);
				}
			}
		}

		else { // SE A RESPOSTA ESTA ERRADA
			if (timeOut === true) { // PASSOU DO TEMPO
				player2 = player2 + 85;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} else {
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			} else { // SE NAO PASSOU DO TEMPO
				player2 = player2 + 55 + tempoResposta;
				if (player2 >= "444") { // SE TIVER CHEGADO AO FIM
					document.getElementById("background2").style.marginLeft = "444px";
					alert("Perdeste, fica para a próxima \nTiveste " + nPontos
							+ " pontos");
					QuadroHonra();
				} else {
					document.getElementById("contas").innerHTML = "Errado!\n A resposta era "
							+ res;
					document.getElementById("background2").style.marginLeft = player2
							+ "px";

					if (radio_choice === "plus") {
						setTimeout(function() {
							sum(dif);
						}, 1000);
					} else if (radio_choice === "sub") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							subtract(dif);
						}, 1000);
					} else if (radio_choice === "mult") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							multiply(dif);
						}, 1000);
					} else if (radio_choice === "divi") {
						document.getElementById("resposta").value = "";
						setTimeout(function() {
							divide(dif);
						}, 1000)
					}
				}
			}
		}
	}

}
