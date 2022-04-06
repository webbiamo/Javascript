var promptMese = prompt('Inserisci il mese').toLowerCase();  // prompt inserimento mese con conversione in minuscolo
var mese = promptMese[0].toUpperCase() + promptMese.substring(1) // prima lettera stringa convertita in maiuscolo
console.log("Hai inserito il mese di " + mese);  //verifica corretta conversione stringa in console 


switch(mese){
    case 'Gennaio':
    case 'Marzo':
    case 'Maggio':    
    case 'Luglio':
    case 'Agosto':
    case 'Ottobre':
    case 'Dicembre':
        console.log(mese + " ha 31 gg"); // mese 31 gg
        break;
    case 'Aprile':
    case 'Settembre':
    case 'Giugno':
    case 'Novembre':
        console.log(mese + " ha 30 gg");  // mese 30 gg
        break;
    case 'Febbraio':
        console.log(mese + " ha 28 gg");  // mese 28 gg
        break;               
    default:
        console.log('non hai inserito il nome di un mese');  // nessuna delle condizioni precedenti
}
