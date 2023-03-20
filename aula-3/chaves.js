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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("apartamento")) {
    console.error("Erro, será necessario ter endereço cadastrado.");
}