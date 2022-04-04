//
//
// function x(){ console.log('hello world!') }
// let y = x
//
// console.log(typeof(x)) // risultato: "function"
// console.log(typeof(y)) // risultato: "function"
// console.log(y)
//
// x = 'hello'
// console.log(x) // risultato: "hello"
//
// y() // risultato: "hello world!"
// console.log(y)
//
// let persona = {
//     name: 'giovanna',
//     z: y
// }
//
// console.log(persona.z)
// persona.z()
//
//


//
// // Non bloccante o asincrono
// setTimeout(function(){
//     console.log('5 secondi')
// }, 5000)
//
//
//
// // Dichiarazione
// function logToConsole(){
//     console.log('2 secondi')
// }
// // Utilizzo
// setTimeout(logToConsole, 2000)
//
// console.log('Console log semplice')


// setInterval(function(){
//     console.log('----')
//     console.log('1 secondo')
// }, 1000)

// function fullnameX(){
//     return this.firstName + ' ' + this.lastName
// }
//
// let x = {
//     firstName: 'Peter',
//     lastName: 'Parker',
//     fullName: function(){
//         return this.firstName + ' ' + this.lastName
//     },
//     fullNameAlt: fullnameX
// }
//
// console.log(x)
// console.log(x.fullName())

// function logFullname(persona){
//     let x = undefined
//     let full = persona.fullName()
//     console.log(full)
// }
//
// logFullname(x)


// console.log({document:document})
//
// let pippoDOM = document.getElementById('pippo')
// console.log({pippoDOM})
//
// console.log(pippoDOM.innerText)
//
//
//
// let engim = document.getElementsByClassName('enfdkbjdsfbjkdfbjkgim')
// console.log(engim)
//
//
// let x = document.querySelectorAll('.engim, img')
//
// console.log(x)



let pippoDOM = document.getElementById('pippo')
console.log(pippoDOM.style)
// background-color: #f00;
// backgroundColor: #f00;


// pippoDOM.style.backgroundColor = '#f00'

