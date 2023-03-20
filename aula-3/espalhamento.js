const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 09409324", "32 32765472"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: "1337",
        apartamento: true,
        complemento: "ap 934",
    },
];

function ligaParaClientes (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para telefone comercial ${telefoneComercial}`);
    console.log(`Ligando para telefone residencial ${telefoneResidencial}`);
}

ligaParaClientes(cliente.telefone[0], cliente.telefone[1]);
ligaParaClientes(...cliente.telefone);//dois estilos de se escrever com mesmos resultados.

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);