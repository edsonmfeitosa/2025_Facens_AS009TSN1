//Tipos tipos de variáveis
// const | var | let
//CONST
const numero = 10
console.log(numero)

//numero = 15.3 - não pode trocar o valor da constante

//VAR
var nome = "Edson";
console.log(typeof nome);

nome = 79.6
console.log(nome, typeof nome)

//LET
let numero1 = 4
var numero2 = 5

console.log(numero1)
{
    let numero2 = 10
    console.log(numero2)
}
console.log(numero2)