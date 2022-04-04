// Generare un nuovo array contenente tutti i voti di tutti i recensori



// let risultato = []
//
// // itero i recensori
// for(let i=0; i<recensori.length; i++){
//     let recensore = recensori[i]
//     let voti = recensori[i].voti
//
//     risultato = risultato.concat(voti)
// }
//
//
// console.log(risultato)


// let risultato = []
//
// // itero i recensori
// for(let i=0; i<recensori.length; i++){
//     let recensore = recensori[i]
//     let voti = recensori[i].voti
//
//     // Itero i voti
//     for(let k=0; k<voti.length; k++){
//         risultato.push(voti[k])
//     }
// }
//
// console.log(risultato)


// for...of

// let risultato = []
// for(let recensore of recensori){
//     for(let voto of recensore.voti){
//         risultato[risultato.length] = voto
//         // in alterntiva: risultato.push(voto)
//     }
// }
// console.log(risultato)


// for...in
// let risultato = []
//
// // // itero i recensori
// for(let i=0 in recensori){
//     let recensore = recensori[i]
//     let voti = recensori[i].voti
//
//     // Itero i voti
//     for(let k=0 in voti){
//         risultato[risultato.length] = voti[k]
//     }
// }
//
// console.log(risultato)


// let persona = {
//     nome: 'pippo',
//     cognome: 'xxx',
//     age: '18',
// }
//
// for(let key in persona){
//     console.log(persona[key])
// }


// let lettere = ["alfa", "beta", "gamma", "delta", "epsilon", "zeta"]
// for(let lettera of lettere){
//     console.log(lettera)
//     if(lettera==="gamma"){ continue }
//
//     console.log('-----fine')
//     console.log(' ccccccccc')
// }



// let lettere = ["alfa", "beta", "gamma", "delta", "epsilon", "zeta"]
// for(let lettera of lettere){
//     console.log(lettera)
//
//     if(lettera==="gamma"){ break }
//
//     console.log('-----fine')
//     console.log(' ccccccccc')
// }


// Dichiarazione
function chiediNome(){
    let nome = prompt('Scrivi il tuo nome')
    let cognome = prompt('Scrivi il tuo cognome')
    alert('Ciao '+ nome +' '+ cognome +'!')
}
// Esecuzione
chiediNome()

// Restituisce un oggetto o undefined

// cerca in base all id del tag html ( es: <div id="myID"></div> )
document.getElementById('#myID')

// cerca in base ad un selettore (identico al selettore css)
document.querySelector('div#myID')

// Restituisce un array di oggetti o un array vuoto

// cerca in base ad una classe tag html ( es: <div class="myClass"></div> )
document.getElementsByClassName('myClass')

// cerca in base ad una classe tag html ( es: <h1></h1> )
document.getElementsByTagName('h1')

// cerca in base ad una classe tag html ( es: <h1></h1> )
document.querySelectorAll('h1.myClass')


// Cerco la Referenza
let reference = document.getElementById('#myID')

// Controllo che la referenza esita e modifico l'oggetto
if(reference){
    // Generico
    reference.style.color = '#fff'
    reference.style.backgroundColor = '#4e4e4e'
    reference.style.padding = '10px'

    // Paragrafo
    reference.innerHTML = 'Nuovo testo del paragrafo'

    // Ancora
    reference.href = 'https://google.com'

    // Immagine
    reference.src = "images/gattini.jpg"
}
