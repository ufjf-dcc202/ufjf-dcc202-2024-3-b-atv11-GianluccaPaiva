import{getLista, limpaLista} from "./lista.js";

const olItens = document.querySelectorAll("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDeLista);

btnAdicionar.addEventListener("click", adicionarItemNaLista);

function adicionarItemNaLista(){
    const item = pEntrada.value;
    if(item){
        const lista = getLista();
        lista.push(item);
        atualizarLista();
    }
}
function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

function atualizarLista(){
    olItens.innerHTML = " ";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild('li');
    }
}

