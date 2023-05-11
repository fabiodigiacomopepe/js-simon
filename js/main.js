/* RICHIESTA
Visualizzare in pagina 5 numeri casuali
Da lì parte un timer di 30 secondi
Dopo 30 secondi i numeri scompaiono
l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */




// Dichiaro le mie variabili globali
const elOutput = document.getElementById("output");                 // Collego DIV output da HTML
const elRisultato = document.getElementById("risulatoPunteggio");   // Collego DIV risultatoPunteggio da HTML
let timer, timer2;          // Setto i 2 timer (uno per fare sparire numeri, uno per richiesta numeri utente)
let secondi = "30";         // Setto seconedi dopo il quale numeri a schermo spariscono
let arrayNumeri = [];       // Setto array numeri casuali a valore "vuoto"
let punti = 0;              // Setto punti iniziali a 0

// Creo ciclo
for (let i = 0; i < 5; i++) {
    const elDiv = document.createElement("div");               // Creo elemento DIV
    const numeroRandom = Math.floor(Math.random() * 50) + 1;   // Genero numero casuale da 1 a 50
    arrayNumeri.push(numeroRandom);                            // Pusho numero in array precendentemente creato
    elDiv.append(numeroRandom);                                // Appendo numero creato in DIV
    elOutput.append(elDiv);                                    // Appendo DIV a Output in HTML
}

console.log(arrayNumeri);                                      //Loggo array in console
timer = setTimeout(nascondiNumeri, parseInt(secondi) * 980);   // Setto funzione legata a timer 1 (nascondo numeri)
timer2 = setTimeout(chiediNumeri, parseInt(secondi) * 1000);   // Setto funzione legata a timer 2 (chiedo numeri a utente)
// 2 timer per evitare problema di numeri ancora visibili al prompt()

// Funzione legata a timer 1
function nascondiNumeri() {
    elOutput.classList.add("hidden");       // Aggiungo classe HIDDEN a DIV in HTML
}

// Funzione legata a timer 2
function chiediNumeri() {
    // Creo ciclo
    for (let i = 0; i < 5; i++) {
        numeroInseritoUtente = parseInt(prompt("Dimmi il tuo numero"));     // Chiedo numero a utente
        if (arrayNumeri.includes(numeroInseritoUtente)) {                   // SE numero è incluso in array
            punti++;                                                        // Incrementa punteggio
            elRisultato.innerHTML += `Complimenti, ${numeroInseritoUtente} era presente tra i numeri!<br>`;
        }
        console.log(punti);         // Loggo punti in console
    }
    elRisultato.innerHTML += "Hai totalizzato " + punti + " punti";         // Inietto risultato in HTML
}

