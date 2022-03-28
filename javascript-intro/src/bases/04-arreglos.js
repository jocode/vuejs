// const arreglo = new Array(10)
const arreglo = [1,2,3,4,5]
arreglo.push(6)

const arreglo2 = [...arreglo]
arreglo2.push(9)

const arreglo3 = arreglo2.map(item => item * 2)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)