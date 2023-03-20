const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 09409324", "32 32765472"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: "1337",
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco.numero);//pode ser utilizar para encontrar com colchetes tambem.