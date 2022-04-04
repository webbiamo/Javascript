let domande = [
    { testo: 'Sei un elefante', opzioni: ['Si', 'No'], risposta: null },
    { testo: 'Sei un leone', opzioni: ['Si', 'No'], risposta: null },
    { testo: 'Sei una zebra', opzioni: ['Si', 'No'], risposta: null },
    { testo: 'Sei un tasso del miele', opzioni: ['Si', 'No'], risposta: null },

]


function creaDomanda(domande, i){
    if(i >= domande.length) {
        console.log(domande)
        return;
    }

    let domanda = domande[i]
    let testo = document.createElement('p')
    testo.innerText = domanda.testo
    document.body.append(testo)

    let contenitoreOpzioni = document.createElement('div')
    for(let opzione of domanda.opzioni){
        let button = document.createElement('button')
        button.innerText = opzione

        contenitoreOpzioni.append(button)
        contenitoreOpzioni.classList.add('opzioni')

        button.addEventListener('click', function(event){
            domanda.risposta = event.target.innerText
            contenitoreOpzioni.remove()

            creaDomanda(domande, ++i)
        })

    }
    document.body.append(contenitoreOpzioni)
}

creaDomanda(domande, 0)
