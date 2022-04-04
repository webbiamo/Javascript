
//
// let classe = $('.miaClasse')
// classe.addClass('anotherClass')
//
//
// let c = document.querySelectorAll('.miaClasse')
// for(let x of c){
//     c.classList.add('miaClasse')
// }



// // creo un nuovo elemento
// let n = document.createElement('p')
// n.innerText = 'bla blah'
//
// let containerB = document.getElementById('container-b')
// let containerA = document.getElementById('container-a')
//
// // inserisco
// containerB.append(n)
//
// // Spostamento
// setInterval(function (){
//     // Sposta n da container-b a container-a
//     containerA.append(n)
//
//     // crea un duoplicato
//     let clone = n.cloneNode(true)
//
//     // modifica lo stile del duplicato
//     clone.style.color = 'white'
//
//     // inserisce il duplicato nel container-b
//     containerB.append(clone)
//
// }, 2000)



// let testo = document.getElementById('testo')
//
// testo.addEventListener('input', function (){
//     console.log(testo.value)
//
// })
//
//
// document.addEventListener('keydown', function(event){
//     console.log(event.key)
//
// })

document.addEventListener('DOMContentLoaded', function(){

    let testo = document.getElementById('testo')
    console.log(testo)

})

window.addEventListener('resize', function(event){
    console.log('resize', event)
})


window.addEventListener('scroll', function(event){
    console.log('scroll', event)
})



// create un paragrafo ed un form con un tasto di sbumit
// il paragrafo contine il testo "Form disabilitato" se viene cliccato il testo cambia
// in "Form abilitato"
// Quando il prargrafo contine il testo "Form disabilitato" il form non puo essere inviato



// Prendo le referenze
let status = document.getElementById('form-status')
let invia = document.getElementById('invia')

// let statusEnabledText = 'Form abilitato'
// let statusDisabledText = 'Form disabilitato'
// status.innerText = statusDisabledText

// let isFormEnabled = false
//
// // Cambia testo del paragrafo e cambio variabile
// status.addEventListener('click', function (){
//     isFormEnabled = !isFormEnabled
//
//     if(isFormEnabled) { status.innerText = 'Form abilitato'}
//     else { status.innerText = 'Form disabilitato'}
// })
//
// // Blocca il submit del form
// invia.addEventListener('click', function (event){
//     if(isFormEnabled===false){ event.preventDefault() }
// })



let container = document.getElementById('container')
let containerB = document.getElementById('container-b')

container.addEventListener('click', function(event){
    console.log('container')
    console.log(event.target)

})

let wrapper = document.getElementById('wrapper')

wrapper.addEventListener('click', function(event){
    console.log('prevent')
    event.stopPropagation()
})




