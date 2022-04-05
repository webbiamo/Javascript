// var a = 7;
//         var condizione1 = false;
//         var condizione2 = true;

//         if (condizione1){    //verifica tutto quanto nelle parentesi se true esegue il codice nelle parentesi graffe
//              console.log('la condizione è vera');         
         
//         }else if (condizione2){
//             console.log('la condizione1 è false e la condione2 è true');
//         }else{
//             console.log('entrambe le condizoni sono false ')
//         }




// var a = 7 
//         var condizione1 = false;
//         var condizione2 = false;
//         if (condizione1){
//             console.log('la condizione1 è vera ');

//         }else if (condizione2){
//             console.log('la condizione2 è vera');
//         }else{
//             console.log('entrambe le condizioni non sono vere')
//         }
      

// if (-45){  //qualsiasi valore anche negativo è diverso da null e significa true. 
//     console.log('condizione vera');
// }else{
//     console.log('condizione falsa');
// }


// var number = 0;

// if (number== 0){
//     console.log (number == 0);
// } else if (number == 1){
//     console.log (number == 1);
// }




// var number = 4;
// switch(number){
//     case 0:
//         console.log('number è pari');
//         break;
//     case 3:
//     case 5:
//         console.log('number è pari');
//         break;
//     case 2:
//         console.log('number è pari');//break è necessario per interrompre l'istruzione se verificata la circostatnza
//         break;    
//     case 4:
//         console.log('number è pari');//break è necessario per interrompre l'istruzione se verificata la circostatnza
//         break; 
//         case 4:
//             console.log('number è pari');//break è necessario per interrompre l'istruzione se verificata la circostatnza
//             break;            
//     default:
//         console.log('number è nessuno dei precedenti');//default è quando nessuno dei casi viene soddisfatto
// }   //default è facoltativo se lo togliamo si limita a eseguire il codice






OPERATORE TERNARIO 

if (a > b)

var c = a > b ? 2 : 4;  // operatore ternario se viene soddisfatta la condizione 
// il valore di c prende il 2 altrimenti 4;

ITERAZIONI una interazione è una operazione che viene ripetura più volte 



// for (var index = 1; index < 5 ; index++){//il ciclo si ripete sino alla verifica delle condizione 
//     console.log('index=' + index);//in questo modo stampa tutti i valori di index minori di 5
// }


// var index = 1;
// index < 5 ?
// {...};
// index++;
// index < 5?
// {...}
// index;

// for (var index = 1; index < 17 ; index+=3){//il ciclo si ripete sino alla verifica delle condizione 
//     console.log('index=' + index);//in questo modo stampa tutti i valori di index minori di 17
// }


//WHILE

// var index = 1;
// while(index < 17){    //esegue la condizione finchè è vera fino a quando index minore 17
//     console.log('index è:' + index);
//     index += 3;        // l'operatore di incremento è fondamentale altrimenti il ciclo continua all'infinito

// }



//DO WHILE   la differenza con il while semplice è che viene eseguito almeno un ciclo visto 
// che la condizione viene vericata dopo l'esecuzioe del codice.

// var index = 1;

// do {
//     console.log()
//     index =+3
// }
// while (index < 17)

//BREAK E CONTINUE 

//break termina il ciclo for 
//continue salta l'interazione e va alla successiva 

// for (let index = 0; index < 10; index++){
//     if (index == 3){
//         break;
//     }
//     console.log('index =' + index);
// }

// for (let index = 0; index < 10; index++){
//     if (index == 3){
//         continue;                           //in questo caso viene saltata la condizione verificata
//     }
//     console.log('index =' + index);
// }


// for (let index = 0; index < 10; index++){
//     if (index % 2 == 0){
//         continue;                           //in questo caso viene saltata la condizione verificata
//     }                                       //se index modulo di 2
//     console.log('index =' + index);
// }

