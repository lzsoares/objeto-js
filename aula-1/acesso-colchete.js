const cliente = {
    nome: "Guilherme",
    idade: 32,
    cpf: "11133367",
    email: "gui@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} anos.`);

console.log(`Os três primeiros digitos do CPF do cliente é ${cliente["cpf"].substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
