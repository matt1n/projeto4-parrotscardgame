// fazer um prompt para definir quantas cartas
//tem que ser par

//fazer uma forma de aparecerem o número de cartas pedido
const aparecer = document.querySelector('.bloco-jogo');

let quantidade = 0;
while (quantidade%2 !==0 || quantidade>14 || quantidade<4) {
    quantidade = prompt('Com quantas cartas você quer jogar?');
}

for (i=0; i<quantidade; i++){
    aparecer.children[i].classList.remove('sumiu');
}