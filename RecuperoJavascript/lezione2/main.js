// sort ordina l0array in ordine alfabetico
// reverse ordina l'array in modo inverso
// l'array viene effettivametne modificato per cui non è necessario metterlo in una variabile 

var a = [1,2,3,];
var b = [3,4,5,];



//join unisce tutti gli elementi separandoli dal carattere che inseriamo tra le parentesi

// var a = ['1', 4 , 'ciao', null, 100];
// a.join('-'); //se non passo niente come separatore default usa la virgola 


//.split è una proprietà delle stringhe che le converte in array

//posizione array 

// var a = ['1', 4 , 'ciao', null, 100];
// console.log(a[2]);

//leggi e scrivi in array

// var a = ['1', 4 , 'ciao', null, 100];
// console.log(a[2]);

// var a = ['1', 4 , 'ciao', null, 100];
// a [8] = 'scuola';
// console.log(a[2]);

// // ciclare gli array 
// var a = [10,20,30,30,50];
// for (var i = 0; i < a.length; i++){
//     console.log(a[i])
// }

// // ciclare array
// var a = [10,20,30,30,50];
// for (var i = 0; i < a.length; i++){
//     a[i] = a[i] + 1;
// }


//OGGETTI 

// var person = {
//     firstname: 'Cristian',
//      lastname: 'Carrino'
//     };  //formattare per leggibilità nel seguente modo 

// person.lastname; //per accedere al valore della chiave
// console.log(person); //qui si vedono i valori e l'appartenza alla classe 

//anche le chiavi possono essere inserite tra gli apici la best pratcticse gli vuole senza apici
//tranne nel caso in cui nel nome chiave ci siano degli spazi in quel caso servono gli apici 

// person.firstname;
// person['first name'];//gli apici possono essere sia singoli che doppi mentre la best practisce 
// //prevede il dot tranne nel caso ci siano spazi nel nome 

// //inserisco dato in una variabile 
// var d = 'firstname';
// person[d];




// var person ={
//     firstname: 'cristian',
//     lastname: 'carrino',
//     fullname: function () {return 'ciao';}
// };

// person.fullname();//per ilmetodo servono anche le tonde 



// person.firstname = 'carlo';
// person.age = 34
// person.newage = function (number) {
//     return 'age: ' + number;
// }
// console.log (person);
// console.log (person.newage(57));



// var person ={
//     firstname: 'cristian',
//     lastname: 'carrino',
//     fullname: function () {
//         return this.firstname;}
// };



// var person ={
//     firstname: 'cristian',
//     lastname: 'carrino',
//     age: 34,
//     fullname: function () {
//         return this.firstname;}
//     increaseage: function
// };


//aggiungere un metodo che restituisce nome spazione cognome spazio age eta  

// var person ={
//     firstname: 'cristian',
//     lastname: 'carrino',
//     age: 34,
// };

// person.fullname = function() {
//     return this.firstname + ' ' + this.lastname  + ' age: '  + this.age
// }

// console.log (person.fullname());


//window è l'oggetto principale di js mentre la pagina è compsota da <iframe>
//l'oggetto windows è ricco di proprietà e metodi 

window.innerHeight; //altezza della pagina 
window.innerWidth; //larghezza della pagina 
window.outerHeight //prende in considerazione tutta l'altezza del browser
window.outerWidth  //prende in consderazione tutta la larghezza del browser
window.pageXOffset //
window.pageYOffset //
window.alert('messaggio in popup');
window.close(); //chiude la finestra
window.confirm('finestra con messaggio di conferma che chiede ok oppure annulla e restituisce un true o false')

if(windows.confirm('messaggio che voglio')){
    console.log('utente ha cliccato ok');
}else{
    console.log ('uttente ha cliccato annulla ')
}

var newindow = window.open()
newindow.close();//ho aperto una finestra e poi l'ho chiusa 
windows.print() //stampa la pagina corrente 
window.prompt('visualizza popup messggio');
window.scrollTo(0,100)//esegue lo scroll della pagina nel valore in px specificato nelle parentesi che indicano
// coordinate x e y
var interval = setInterval(function()){
    console.log (i++);
}, 1000);


clearInterval(interval);


//un altro oggetto del brosser è location 
//eseguire in console log "location" e si vedreanno restituiti diversi valori 

location.href;
location.href = 'https:google.it';

//proprietè oggetto location 
//metodi oggetto location
location.reload() //refresh della pagina 
location.assign('https:www.google.it') //carica nuova url nella pagina corrente
location.replace() //sostituisce la pagina corrente, che viene rimossa dalla cronologia

//oggetto history
history.back(); //indietro di una pagina
history.forward(); //avanza di una pagina
history.go(+-xpagine); //avanza o arretra di xpagine nella cronologia 

//oggetto navigator 
//contiene le informazioni relative al browser
navigator.appVersion; //
navigator.geolocation; //richiede la posizione dal browser 
navigator.userAgent; //mostra diverse informazioni sul browser 
navigator.javaEnabled(); //riporta se supportato java

//oggetto screen
screen;   //riporta le informazioni dello schermo il valore più importante è quello 
          //dell'orientamento che consente di gestire il comportamento del docie in base ad orientamento


//oggetto date 
var date = new Date();
console.log(date);

date.getDate();
date.getMonth();
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTimezoneOffset(); //restituisce differenza in minuti rispetto a greenwicht



var data2 = new Date();
date2 - date;
(date2 - date)/1000/60  //restituisce in minuti 

//oggetto math
Math.floor(12.3);
Math.ceil(12.9);
Math.round(12.8);
Math.random

//ESERCIZIO PER CASA FIBONACCI 
//con un ciclo for dentro un array per popolarlo con la sequenza di fibonacci 


var fibonacci = [];
var fibonacci = [0,1,1,2,3,]//sequenza fibonacci anche online 



var fibonacci= [0,1];
for (fibonacci = 0 ; fibonacci <= 233; fibonacci++ ){
    
}

























