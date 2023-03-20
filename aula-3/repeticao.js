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

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} guarda o valor: ${cliente[chave]}`);
    }
};

