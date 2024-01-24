// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

//creo le variabili di oggetti

const bestGames = [
    {
        Immagine: "./img/spiderman.jpg",
    },
    {
        Immagine: "./img/fortnite.jpg",
    },
    {
        Immagine: "./img/league-of-legends.jpeg",
    },
    {
        Immagine: "./img/thefinals.webp",
    },
    {
        Immagine: "./img/WCCFescapefromtarkov1.jpg",
    },
];


let mainPicArray = bestGames.map(( gameAd ) => gameAd.Immagine)

let arrowUp = document.getElementById("up");
let arrowDown = document.getElementById("down");
let image = document.getElementById("mainImg");

let imageInd = 0;

updateImage();

arrowUp.addEventListener("click", function() {
    imageInd = (imageInd - 1 + mainPicArray.length) % mainPicArray.length;
    updateImage();
})

arrowDown.addEventListener("click", function() {
    imageInd = (imageInd + 1) % mainPicArray.length;
    updateImage();
})


//Aggiungo la funzione per creare il container con l'img

function updateImage() {
    image.innerHTML = `
            <div class="mainPic">
                <img class="_imgContent position-relative" src="${mainPicArray[imageInd]}" alt="">
            </div>
            <div><p>Name: ${ mainPicArray[imageInd].Name}  ${mainPicArray[imageInd].Descrizione} </p></div>
            `
        }