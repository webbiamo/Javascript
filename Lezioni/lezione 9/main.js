
// let person = {
//     name: 'Peter Parker',
//     logName: function(){
//         window.setTimeout(function(){
//             console.log('NAME', this.name)
//             console.log('THIS', this)
//         }, 1000)
//     }
// }
// person.logName()
// let nome = 'Peter Parker'
// closure
// function myFunction(){
//     console.log(nome)
//     let nome = 'Tony Stark'
// }

// myFunction()


// let nome = 'Peter Parker'

// myFunction()

// function myFunction(){
//     console.log('funzione')
//     // console.log(nome)
//     // var nome = 'Tony Stark'
// }
//
// myFunction()

// let logPippo = ()=>{
//     console.log('pippo')
// }
// logPippo()
//
// let logSmt = (text)=>{
//     console.log(text)
// }
// logSmt('Hello world')
//
// setTimeout(()=>{
//     console.log('Dopo 1 secondo')
// }, 1000)


// let squared = (num)=>num*2
let squared = num=>num*2

/*
let squared = (num)=>{
    return num*2
}
* */


console.log( squared(2) )


// setTimeout(()=>{
//     console.log('Dopo 1 secondo')
// }, 1000)
//
// console.log('Hello')
