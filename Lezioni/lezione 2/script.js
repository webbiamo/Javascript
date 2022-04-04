
// ESEMPIO DELLE DIVERSE SINTASSI DEGLI OGGETTI

let persona = {
    nome: 'pippo',
    cognome: 'topolino',
    "nome cane": "pluto",
    "lavoro": 'disoccupato'
}

// Lettura
console.log(persona.nome) // Sintassi standard

// E sempre possibile possibile utilizzare la sintassi standard purchè
// la chiave rispetti le regole dei nomi delle variabili
console.log(persona.lavoro) // Sintassi standard


console.log(persona['nome cane']) // Sintassi alternativa
// La sintassi alternativa si puo utilizzare sempre per accedere a qualsiasi elemento
console.log(persona['nome']) // Sintassi alternativa

// Scrittura
persona['indirizzo'] = "via degli sviluppatori"


// scrittura
let nomeChiave = 'eta'
persona[nomeChiave] = 25

// lettura
let x = 'nome'
console.log(persona[x])


// ESEMPIO ARRAY DI OGGETTI
let recensori = [
    {nome: 'topolino'},
    {nome: 'pippo'},
    {nome: 'pluto'},
    [5, 4, 6, 7, {parola: 'ciao'}],
    {nome: 'paperino'}
]

console.log(recensori[0])
console.log(recensori[0].nome)
console.log(recensori[3][2])
console.log(recensori[3][4].parola)


// ESEMPIO CONVERSIONE JAVASCRIPT -> JSON
let recensoriJSON = JSON.stringify(recensori)
// ESEMPIO CONVERSIONE JSON -> JAVASCRIPT
JSON.parse(recensoriJSON)
