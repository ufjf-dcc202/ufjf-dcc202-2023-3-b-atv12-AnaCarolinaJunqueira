const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);

function leFormulario(event){
    EventTarget.preventDefault();
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);

    transacao(origem, destino, fruta, quantidade);
    // document.entrada.submit();
}

function atualizaTela(){
    const estoque = getEstoque();
    preencheLista(olJoao, estoque.joao);
    preencheLista(olMaria, estoque.maria);

}