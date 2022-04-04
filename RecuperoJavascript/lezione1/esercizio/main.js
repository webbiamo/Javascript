var mese = prompt('Inserisci il mese');


switch(mese){
    case 'Gennaio':
    case 'Marzo':
    case 'Maggio':    

        console.log(mese + "ha 30 gg");
        break;
    case 3:
    case 5:
        console.log('number è pari');
        break;
    case 2:
        console.log('number è pari');
        break;    
    case 4:
        console.log('number è pari');//break è necessario per interrompre l'istruzione se verificata la circostatnza
        break; 
        case 4:
            console.log('number è pari');//break è necessario per interrompre l'istruzione se verificata la circostatnza
            break;            
    default:
        console.log('number è nessuno dei precedenti');//default è quando nessuno dei casi viene soddisfatto
}   //default è facoltativo se lo togliamo si limita a eseguire il codice

