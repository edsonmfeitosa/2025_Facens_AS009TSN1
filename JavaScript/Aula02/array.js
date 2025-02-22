const qualquercoisa = []

qualquercoisa[0] = 1

console.log(qualquercoisa)

qualquercoisa[1] = 'a'
console.log(qualquercoisa)

//------------------
const coisas = [1, 2, 3.5, 4]
console.log(coisas[2])

coisas[10] = 'Edson'

console.log(coisas)

//colocar itens no começo da lista
coisas.unshift('primeiro')
console.log(coisas)
coisas.shift(coisas)
console.log(coisas)

//colocar itens no final da lista
console.log('tamanho do array: '+coisas.length)
coisas.push('último item')
console.log(coisas)
coisas.pop()
console.log(coisas)
