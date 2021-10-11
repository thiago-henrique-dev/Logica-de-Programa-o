const cliente = {
    nome: "Thiago",
    idade: 21,
    cpf: 49055351822,
    email: "thi4525thi@gmail.com"
}
console.log("Meu nome é " + cliente.nome, "e tenho  " + cliente.idade, "anos")

const chaves = ["nome","idade","cpf","email"]
/*console.log(cliente[chaves[0]])*/
chaves.forEach(info=>console.log(cliente[info]))
console.log(cliente["nome"])