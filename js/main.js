/* RICHIESTA
Visualizzare in pagina 5 numeri casuali
Da lì parte un timer di 30 secondi
Dopo 30 secondi i numeri scompaiono
l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const elOutput = document.getElementById("output");
const elRisultato = document.getElementById("risulatoPunteggio");
let timer;
let secondi = "1";
let arrayNumeri = [];
let punti = 0;

for (let i = 0; i < 5; i++) {
    const elDiv = document.createElement("div");
    const numeroRandom = Math.floor(Math.random() * 50);
    arrayNumeri.push(numeroRandom);
    elDiv.append(numeroRandom);
    elOutput.append(elDiv);
}

console.log(arrayNumeri);
timer = setTimeout(nascondiNumeri, parseInt(secondi) * 1000);

function nascondiNumeri() {
    elOutput.classList.add("hidden");
    for (let i = 0; i < 5; i++) {
        numeroInseritoUtente = parseInt(prompt("Dimmi il tuo numero"));

        if (arrayNumeri.includes(numeroInseritoUtente)) {
            punti++;
            elRisultato.innerHTML += `Complimenti, ${numeroInseritoUtente} era presente tra i numeri!<br>`;
        }
        console.log(punti);
    }
    elRisultato.innerHTML += "Hai totalizzato " + punti + " punti";
}

