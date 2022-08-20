const lista = document.querySelector('.lista')
const imgs = ['bobrossparrot','explodyparrot','fiestaparrot','revertitparrot','tripletsparrot','unicornparrot','metalparrot']
const listaImg = []

imgs.sort(comparador)

let quantidade = 0;
while (quantidade%2 !==0 || quantidade>14 || quantidade<4) {
    quantidade = prompt('Com quantas cartas você quer jogar?');
}

for (i=0; i<quantidade/2; i++){
    listaImg.push(imgs[i])
    listaImg.push(imgs[i])
}
listaImg.sort(comparador)
function comparador() { 
	return Math.random() - 0.5; 
}

for (i=0; i<quantidade; i++) {
    lista.innerHTML += `<li><div class="card ${listaImg[i]}" onclick="girar(this)">
    <div class="frente face">
        <img src="media/front.png" alt="Front-parrot">
    </div>
    <div class="tras face"><img src="media/${listaImg[i]}.gif"></div>
    </div></li>`
}

function girar(elemento) {
    const elemento0 = elemento.children[0]
    const elemento1 = elemento.children[1]
    elemento1.classList.add('trasVirado')
    elemento0.classList.add('frenteVirado')}