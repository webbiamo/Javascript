
/*
* Scambiare la lista voti di yotobi e sinergo
* */

let votiYotobi = recensori[0].voti
recensori[0].voti = recensori[1].voti

recensori[1].voti = votiYotobi
console.log(recensori)
