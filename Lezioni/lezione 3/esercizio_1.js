


// Scrivere una serie di if-elseif-else che controlla l'eta della persona
// se è minore o uguale a 10 anni logga in console "sei un bambino"
// se ha piu di 10 anni ma meno di 18 logga in console "sei un adolescente"
// se ha 18 anni o piu di di 18 anni logga in console "sei un adulto"


let persona = {
    name: 'pippo',
    age: 15
}

// Versione più verbosa
if(persona.age<=10){
    console.log("sei un bambino")
}
else if(persona.age>10 && persona.age<18){
    console.log("sei un adolescente")
}
else if(persona.age>=18){
    console.log("sei un adulto")
}

// Versione piu concisa
if(persona.age<=10){
    console.log("sei un bambino")
}
else if(persona.age<18){
    console.log("sei un adolescente")
}
else{
    console.log("sei un adulto")
}


















