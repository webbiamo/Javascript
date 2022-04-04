

// cerco l'elemeto con ID=container
let container = document.getElementById('container')

// creo un div
let wrapper = document.createElement('div')

// creo un paragrafo
let paragrafo = document.createElement('p')

// Aggiungo del testo dentro al paragrafo
paragrafo.innerText = 'Sono un paragrafo'

// inserisco il paragrafo dentro al div wrapper
wrapper.append(paragrafo)

// inserisco il div wrapper dentro l'elemeto con ID=container
container.append(wrapper)


