let estoque = {
    'joao': [
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'maca', 'qtd': 2}
    ],
    'maria': [
        {'tipo': 'maca', 'qnt': 2},
        {'tipo': 'banana', 'qnt': 40}
    ]
};

function getEstoque(){
    return structuredClone(estoque);
}

function transacao(origem, destino, tipo, quantidade) {
    if(destino === "pomar"){
        const pessoa = estoque[origem];
        for(let i=0; i<pessoa.length; i++){
            const monte = pessoa[i];
            if(monte.tipo === tipo){
                monte.quantidade -= quantidade;
            }
        }

    }
}

export (getEstoque, transacao);