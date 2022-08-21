function comparador() { 
    return Math.random() - 0.5; 
}

function contaTempo(){
    tempo++
    cronometro.innerHTML = tempo+'s';
}

let tempo = 0
let contador = 0
let certas = []
let cronometro = document.querySelector('.cronometro')
let quantidade = 0;
const lista = document.querySelector('.lista')
function comecar(){


    const imgs = ['bobrossparrot','explodyparrot','fiestaparrot','revertitparrot','tripletsparrot','unicornparrot','metalparrot']
    const listaImg = []

    tempo = 0
    contador = 0

    imgs.sort(comparador)

    quantidade = 0;
    while (quantidade%2 !==0 || quantidade>14 || quantidade<4) {
        quantidade = prompt('Com quantas cartas você quer jogar? \n(4 - 14)');
    }

    for (i=0; i<quantidade/2; i++){
        listaImg.push(imgs[i])
        listaImg.push(imgs[i])
    }
    listaImg.sort(comparador)

    for (i=0; i<quantidade; i++) {
        lista.innerHTML += `<li><div class="card ${listaImg[i]} a${i}" onclick="girarVerificar(this)">
        <div class="frente face">
            <img src="media/front.png" alt="Front-parrot">
        </div>
        <div class="tras face"><img src="media/${listaImg[i]}.gif"></div>
        </div></li>`
    }
}
comecar()
let timer = setInterval(contaTempo, 1000)

const verifica = []

function desvirar(){
    verifica[0].children[0].classList.remove('frenteVirado')
    verifica[0].children[1].classList.remove('trasVirado')
    verifica[1].children[0].classList.remove('frenteVirado')
    verifica[1].children[1].classList.remove('trasVirado')
    verifica.pop()
    verifica.pop()
    console.log('desvira')
}

function girar(a){
    const elemento0 = a.children[0]
    const elemento1 = a.children[1]
    elemento1.classList.add('trasVirado')
    elemento0.classList.add('frenteVirado')
    verifica.push(a)
    contador++
    console.log('gira')
}
function vitoria(){
    alert(`Você ganhou em ${contador} jogadas e em ${tempo}s!`)
    certas=[]
    let recomecar = prompt('Deseja jogar novamente? (sim ou não)')
    while (recomecar !== 'sim' && recomecar !=='não') {
        recomecar = prompt('Deseja jogar novamente? (sim ou não)')
    }
    if (recomecar==="sim"){
        lista.innerHTML=''
        comecar()
        timer = setInterval(contaTempo, 1000)
    }
}

function girarVerificar(elemento) {
    if (verifica.length<2 && !elemento.classList.contains('certo') && !verifica.includes(elemento)){
        console.log('entrei');
        girar(elemento);
    
        if (verifica.length===2) {
            console.log('aqui tb, kkkkk');
            if (verifica[0].classList[1]===verifica[1].classList[1]){
                verifica[0].classList.add('certo')
                verifica[1].classList.add('certo')
                certas.push(verifica[0])
                certas.push(verifica[1])
                verifica.pop()
                verifica.pop()
            } else if (verifica.length===2){
                console.log('aqui');
                setTimeout(desvirar, 1000);
            }
        }
        if (certas.length===Number(quantidade)){
            clearInterval(timer)
            setTimeout(vitoria, 500)
        }
    }
}