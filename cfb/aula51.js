const valores=[10,20,30,45]
const it_valores=valores[Symbol.iterator]()



console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)

const texto="YouTube"
const it_texto=texto[Symbol.iterator]()

console.log(texto)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)