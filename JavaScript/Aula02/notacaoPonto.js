//Notação Ponto
let objeto01 = {}
objeto01.nome = 'Edson'
console.log(objeto01)

let aluno = {
    nome: 'José',
    email: "jose@gmail.com",
    telefone: '(15) 99944466',
    endereco : {
        rua : 'Rua das flores',
        numero: 1,
        bairro: 'Vila teste'
    },
    notas: [10, 8, 7.5, 10]
}
console.log(aluno.endereco.rua)
console.log(aluno.notas[2])