/*

Utilizzando i metodi del dom crare un form

creare 3 input di tipo testo
ed un bottone di submit
inserire gli input appena creati nel form

Gli input saranno:
nome
password
ripeti password


Al click sul bottone di sumbit controllare tramite javascript
che i 3 input non siano vuoti
che il contenuto di password e ripeti password sia di almeno 8 caratteri
che i valori di password e ripeti password siano identici

se tutti i controlli passano eseguire il submit del form
se alcuni controlli non passano mostrare un messaggio di errore

* */


let body = document.body
let form = document.createElement('form')

let name = document.createElement('input')
name.type = 'text'

let pwd = document.createElement('input')
name.type = 'text'

let pwdrpt = document.createElement('input')
name.type = 'text'

let submit = document.createElement('button')
submit.innerText = 'invia'


form.append(name, pwd, pwdrpt, submit)

body.append(form)


function appendError(element, message){
    let err = document.createElement('span')
    err.innerText = message
    err.classList.add('error')
    element.after(err)
}


submit.addEventListener('click', function(event){
    let errors = document.getElementsByClassName('error')
    console.log(errors.length)

    // ERRORE DA DEBUGGARE
    for(let e of errors){ e.remove() }

    let isValid = true

    if(name.value === ''){
        appendError(name, 'Nome è vuoto')
        isValid = false
    }
    if(pwd.value === ''){
        appendError(pwd, 'Password è vuoto')
        isValid = false
    }
    if(pwdrpt.value === ''){
        appendError(pwdrpt, 'Ripeti Password è vuoto')
        isValid = false
    }
    if(pwd.value !== '' && pwd.value.length < 8 ){
        appendError(pwd, 'La Password deve essere di almeno 8 caratteri')
        isValid = false
    }
    else if(pwd.value !== '' && pwdrpt.value !== '' && pwd.value !== pwdrpt.value){
        appendError(pwd, 'Password e Ripeti Password non sono uguali')
        isValid = false
    }

    if(!isValid) event.preventDefault()
})


