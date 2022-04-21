var jogador = null;
var jogadorSel = document.getElementById('jogador-selecionado');
var vencedorSel = document.getElementById('vencedor-selecionado');


const matriz =[
[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],
[1,5,9],[3,5,7]
]
mudarJogador('X');

function escolherQuadrado(id){
    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }
    if(vencedorSel.innerHTML == 'X' || vencedorSel.innerHTML === 'O'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }
    else{
        jogador = 'X';
    }
    verificarVencedor();
    mudarJogador(jogador);
}

function mudarJogador(val){
    jogador = val;
    jogadorSel.innerHTML = val;
}

function verificarVencedor(){
    let q1,q2,q3;
    for(let l = 0; l < 8; l++){
        q1 = document.getElementById(matriz[l][0]);
        q2 = document.getElementById(matriz[l][1]);
        q3 = document.getElementById(matriz[l][2]);

        if(q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
            q1.style.background = '#0f0'; 
            q2.style.background = '#0f0';
            q3.style.background = '#0f0';
            vencedorSel.innerHTML = q1.innerHTML
            break;
        }
    }
}

function reiniciar(){
    vencedorSel.innerHTML = '';
    for(let i = 1; i < 10; i++){
        let q = document.getElementById(i);
        q.style.background = '#eee';
        q.style.color = '#eee';
        q.innerHTML = '-';
    }
    mudarJogador('X');
}

