let iniciarGame = document.querySelector(".iniciarGame");

let chica = document.querySelector(".imgChica");

let chico = document.querySelector(".imgPlayer");

let texto = document.querySelector(".text");

let espada = document.querySelector(".espada");

oleada2 = document.querySelector(".enemigosOleada2");

enemigos2 = document.querySelectorAll(".enemigos2");

let estadisticas = document.querySelectorAll(".item");

let saltarText = document.querySelector(".saltarTexto");

main = document.querySelector(".contenedor-main-menu");

let contentText = document.querySelector(".contenedor-text");

zona = document.querySelector(".Zona");

let fase = 0;

let calle = document.querySelector(".calle");

let templo = document.querySelector(".templo");

templo.addEventListener("click", ()=>{
	if(fase == 8){
	templo.classList.add("d-none");
	espada.classList.remove("d-none");
	chico.classList.add("playerAnim1");
	zona.textContent = "Templo";
	zona.style.color = "white";
	fase++;
	}
});


let oleada1 = document.querySelector(".enemigosOleada1");

let listaEnemigo1 = document.querySelectorAll(".enemigos1");

let vidaEnemigo1 = 3;
let vidaEnemigo2 = 3;
let vidaEnemigo3 = 3;
let enemigos1Vivo = true;

let vida = 300;

let contenedorInventario = document.querySelector(".inventario");

let inventario = document.querySelectorAll(".items");

listaEnemigo1[0].addEventListener("click", ()=>{

	if(!listaEnemigo1[0].classList.contains("animate")){

		listaEnemigo1[1].classList.remove("animate");
		listaEnemigo1[2].classList.remove("animate");

		if (vidaEnemigo1 == 0) {


	    } else{

			listaEnemigo1[0].classList.add("animate");
			vidaEnemigo1--;


			vida -= 50;

			if(vidaEnemigo1 == 0){
				if (vidaEnemigo2 == 0 && vidaEnemigo3 == 0){
					if (fase == 7) {
						templo.classList.remove("d-none");
						fase++;
					}
				}
				listaEnemigo1[0].setAttribute("hidden", "");
			}

			estadisticas[0].textContent = `Vida: ${vida}`;


			let derrota = document.querySelector(".dead");

			if(vida == 0){
				console.log("derrota");
				derrota.classList.remove("d-none");
			}
	
	}
}

});

listaEnemigo1[1].addEventListener("click", ()=>{

	if(!listaEnemigo1[1].classList.contains("animate")){

		listaEnemigo1[0].classList.remove("animate");
		listaEnemigo1[2].classList.remove("animate");

		if (vidaEnemigo2 == 0) {



		}else{

		listaEnemigo1[1].classList.add("animate");
		vidaEnemigo2--;


		vida -= 50;

		if(vidaEnemigo2 == 0){
			if (vidaEnemigo1 == 0 && vidaEnemigo3 == 0){
				if (fase == 7) {
						templo.classList.remove("d-none");
						fase++;
					}
				}
			listaEnemigo1[1].setAttribute("hidden", "");
		}

		estadisticas[0].textContent = `Vida: ${vida}`;

		let derrota = document.querySelector(".dead");

			if(vida == 0){
				console.log("derrota");
				derrota.classList.remove("d-none");
			}
	 }
	}

});

listaEnemigo1[2].addEventListener("click", ()=>{

	if(!listaEnemigo1[2].classList.contains("animate")){

		listaEnemigo1[0].classList.remove("animate");
		listaEnemigo1[1].classList.remove("animate");

		if (vidaEnemigo3 == 0) {



		}else{

		listaEnemigo1[2].classList.add("animate");
		vidaEnemigo3--;

		vida -= 50;

		if(vidaEnemigo3 == 0){

			if (vidaEnemigo1 == 0 && vidaEnemigo2 == 0){
					if (fase == 7) {
						templo.classList.remove("d-none");
						fase++;
					}
				}
			listaEnemigo1[2].setAttribute("hidden", "");
		}

		estadisticas[0].textContent = `Vida: ${vida}`;

		let derrota = document.querySelector(".dead");

			if(vida == 0){
				console.log("derrota");
				derrota.classList.remove("d-none");
			}

	 }

	}

});

iniciarGame.addEventListener("click", ()=>{
	iniciarGame.classList.add("d-none");
	chica.removeAttribute("hidden");

	main.classList.add("between");

	chica.classList.remove("disabled");
	chica.classList.add("imgChicaAnim1");

	contentText.removeAttribute("hidden");

});

saltarText.addEventListener("click", ()=>{

	if (fase == 0) {
	texto.textContent = "De acuerdo, iré enseguida";

	contentText.classList.remove("borderYellow");
	contentText.classList.add("borderBlue");
	fase++;
	} 
	else if(fase == 1){
		chica.classList.remove("imgChicaAnim1");
		chica.classList.add("imgChicaAnim2");
		contentText.setAttribute("hidden", "");
		fase++;
	}else if(fase == 4){
		contentText.classList.remove("borderRed");
		contentText.classList.add("borderBlue");
		texto.textContent = "Ja, supongo que no me dejarán pasar tan fácil. Espero hayan escribido sus carta de despedida para sus familiares";
		fase++;
	}
	else if(fase == 5){
		contentText.classList.remove("borderBlue");
		contentText.classList.add("borderRed");
		texto.textContent = "Te veo muy seguro, humano. Ten en cuenta que tu arrogancia hará que tu muerte sea dolorosa";
		fase++;
	}else if(fase == 6){

		contentText.setAttribute("hidden", "");
		fase++;

	}else if(fase == 10){
		contentText.classList.remove("borderRed");
		contentText.classList.add("borderBlue");
		texto.textContent = "¿Trampa dices?. Me parece que ustedes mismo han caído en su propía trampa";
		fase++;
	}else if(fase == 11){
		contentText.classList.remove("borderBlue");
		contentText.classList.add("borderRed");
		texto.textContent = "Jum, Veo que no te has dado cuenta en que situación te encuentras, humano. La muerte es el lugar indicado para ti";
		fase++;
	}else if(fase == 12){

		contentText.classList.remove("borderRed");
		contentText.classList.add("borderBlue");

		texto.textContent = "[Habilidad nueva] Ataca al enemigo del centro para activarla";
		fase++;

	}else if(fase == 13){

		contentText.setAttribute("hidden", "");
		fase++;

	}else if(fase == 15){

		zona.textContent = "Katedral";
		zona.style.color = "white";
		contentText.classList.remove("borderYellow");
		contentText.classList.add("borderBlue");

		texto.textContent = "Con está espada los acabaré enseguida. [*Corre a la zona de batalla*]";
		fase++;

	}

	else if(fase == 16){

		contentText.classList.remove("borderBlue");
		contentText.classList.add("borderYellow");

		chico.setAttribute("hidden", "");

		texto.textContent = "No creí que vendrían tantos. Tendré que ir a apoyarlo.";
		fase++;

	}else if(fase ==17){
		creditos = document.querySelector(".creditos");
		creditos.classList.remove("d-none");
		contentText.setAttribute("hidden", "");
	}

});

katedral = document.querySelector(".katedral");

enemigos2[1].addEventListener("click", ()=>{
	if(fase == 14){ 
		oleada2.setAttribute("hidden", "");
		katedral.classList.remove("d-none");
	}
})

katedral.addEventListener("click", ()=>{

	katedral.classList.add("d-none");

	chica.removeAttribute("hidden");
	chica.classList.remove("disabled");
	chica.classList.remove("imgChicaAnim2");
	chica.classList.add("imgChicaAnim3");

	contentText.removeAttribute("hidden");
	contentText.classList.remove("borderBlue");
	contentText.classList.add("borderYellow");
	texto.textContent = "Llegas justo a tiempo, los enemigos llegarán pronto. Dirigete a la zona de batalla, cuento contigo";
	fase++;
});

chico.addEventListener("click", ()=>{

	if (fase ==2) {
		calle.classList.remove("d-none");
		fase++;
	}

});

calle.addEventListener("click", ()=>{
	if (fase == 3) {

		zona.textContent = "Calle";
		zona.style.color = "red";
		oleada1.removeAttribute("hidden");
		contentText.removeAttribute("hidden");
		texto.textContent = `¿Otro humano? Vienen uno tras otro solamente para morir, es tu turno`;
		contentText.classList.remove("borderBlue");
		contentText.classList.add("borderRed");
		calle.classList.add("d-none");
		fase++;

	}
})


let espadaArriba = 0;

espada.addEventListener("click", ()=>{

	if (espadaArriba == 0) {
		espada.classList.add("arriba1");
    } else if(espadaArriba == 1){
    	espada.classList.remove("arriba1");
    	espada.classList.add("arriba2");
    } else if(espadaArriba == 2){
    	espada.classList.remove("arriba2");
    	espada.classList.add("arriba3");
    } else if(espadaArriba == 3){
    	espada.setAttribute("hidden","");
    	chico.setAttribute("src","img/playerEspada.jpg");
    	if (fase == 9) {
    		oleada2.removeAttribute("hidden");
    		enemigos2[0].classList.add("enemigos2Spawn");
    		enemigos2[1].classList.add("enemigos2Spawn");
    		enemigos2[2].classList.add("enemigos2Spawn");

    		contentText.classList.remove("borderBlue");
			contentText.classList.add("borderRed");

			contentText.removeAttribute("hidden");
			texto.textContent = `Estúpido, humano, has caído en la trampa. Preparate para morir lentamente`;
			fase++;
			
			chico.classList.remove("playerAnim1");
			chico.classList.add("playerAnim2");
    	}
    }

    espadaArriba++;
});



window.addEventListener("click", e=>{

	console.log(e.target);

	if(e.target == inventario[0]){
		if(vida < 400){
			inventario[0].setAttribute("hidden","");
			vida += 150;
		}
	}

	if(e.target == inventario[1]){
		if(vida < 400){
			inventario[1].setAttribute("hidden","");
			vida += 150;
		}
	}

	if(e.target == inventario[2]){
		if(inventario[2].classList.contains("item-mana")){
			if(vida < 400){
				inventario[2].setAttribute("hidden","");
				vida += 100;
			}
		}
	}

	if(vida > 400){
		vida = 400;
	}

	estadisticas[0].textContent = `Vida: ${vida}`;


});