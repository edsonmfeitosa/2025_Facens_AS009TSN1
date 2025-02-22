class pessoa {}
console.log(typeof pessoa)

//função nomeada
function subtracao(num1, num2) {
    return num1 - num2
}
console.log(subtracao(10, 4))
console.log(subtracao(10))
console.log(subtracao(2, 4, 5, 6, 7))
console.log(subtracao(5, '5'))

//função não nomeada
let somar = function (num1, num2){
    return num1 + num2
}
console.log(somar(4, 5))
console.log(somar(5, '5'))

//arrow function
let divisao = (n1, n2) => {
    if (n2 == 0) {
        return "Impossível dividir"
    }
    else{
        return n1 / n2
    }
}
console.log(divisao(5, 2))

let multiplicacao = (n1, n2) =>  n1 * n2

console.log(multiplicacao(2, 3))

let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2)

console.log(operacaoMatematica(3, 6, divisao))