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

// //variante esercizio eseguita con ciclo for e if NON FUNZIONANTE E NON COMPLETATA

// var promptMese = prompt('Inserisci il mese').toLowerCase();  // prompt inserimento mese con conversione in minuscolo
// var mese = promptMese[0].toUpperCase() + promptMese.substring(1) // prima lettera stringa convertita in maiuscolo
// console.log("Hai inserito il mese di " + mese);  //verifica corretta conversione stringa in console 


// const mesi = ["Gennaio", 
// 			  "Febbraio", 
//               "Marzo", 
//               "Aprile", 
//               "Maggio", 
//               "Giugno",
//               "Luglio",
//               "Agosto",
//               "Settembre",
//               "Ottobre",
//               "Novembre",
//               "Dicembre"];

// let text = "";
// //let text1 = "non hai scelto un mese";
// for (let i = 0; i < mesi.length; i++) {
//   if (mesi[i] = mese){
//     console.log (mesi[i] + '<br>');
//  }else if (mesi[i] = mese){
//     console.log (mesi[i] + '<br>');
//  }else if (mesi[i] =  mese){
//  	console.log (mesi[i] + '<br>');
// }else if (mesi[i] =  mese){
//     console.log (mesi[i] + "<br>");
// }else if (mesi[i] =  mese){
//     console.log (mesi[i] + "<br>");
// }else if (mesi[i] =  mese){
//     console.log (mesi[i] + "<br>");
// }else if (mesi[i] =  mese){
//     console.log (mesi[i] + "<br>");
// }else if (mesi[i] =  mese){
//     console.log (mesi[i] + "<br>");    
//  }else{
//     console.log ("non hai scelto un mese" + "<br>");
//  }
//  }
