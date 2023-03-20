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

cliente.enderecos.push({
    rua: "R. ataide",
    numero: "23",
    apartamento: false,
});

const listaDeApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento == true
);

console.log(listaDeApartamentos);