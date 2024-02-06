// variables

let nombre, animal = 'nombre';

//primitivos numbre string boole undefined null
//referencaias 

//primitivos

let numero = 1 //number
let texto = "esto es un texto" // string
let verdadero = true 
let falso = false
let noDefinido
let undef = undefined
let nulo = null


// console.log(verdadero);


//  constantes

let nombraCambiante = 'nombresito'
nombraCambiante = 'nombresito 2'

const nombreNoCmmbia = 'nombresito'
// nombreNoCmmbia = 'nombresito 2'

// console.log(nombreNoCmmbia)

// Tipado Estatico

// Tipado Dinamico

let numerito = 1
let nombresCompleto = 'Oswaldo Escobar'
let verdaderoBool = false
let nuleable = null // esto retorna un objet al imprimirt typeValue
//...

//comentaraios
/**
 * sdf
 * sdf
 * 
 */



/** Tipor de Referencia */

/**
 * OBJECTOS
 */

let personaje = {
    nombre: String,
    edad: Number
}

personaje.nombre = 'oswaldo'
personaje.edad = 13

console.log(personaje)
console.log(personaje.edad)
console.log(personaje['edad'])

delete personaje.edad
console.log(personaje)

// Arrays

let array = [] // vacio
let arrayString = ['chacchicho','caballo']

console.log(arrayString)
console.log(arrayString[0])
arrayString[2] = 'chanchazo'
console.log(arrayString)

arrayString[7] = 'chanchazo'
console.log(arrayString)

console.log(typeof arrayString)

console.log(arrayString.length)



function saludar() {
    console.log('hola mundo')
}

saludar()

function suma(parameter1, parameter2) {
    return parameter1 * parameter2
}

suma(1,1)
