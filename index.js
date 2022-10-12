import * as moduloMatematicas from './modulos/matematicas.js' // AQUI IMPORTAMOS TODO
import getAuthor from './modulos/literatura.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

console.log(getAuthor())
