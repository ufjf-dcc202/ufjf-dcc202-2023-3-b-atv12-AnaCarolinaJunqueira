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

export (getEstoque);