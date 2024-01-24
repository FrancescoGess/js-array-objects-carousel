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
        Name: "Spiderman"
        Descrizione: "Spider-Man in realtà è Peter Parker, un giovane brillante con la passione per la fotografia che viene morso da un ragno radioattivo"
        Immagine: "./img/spiderman.jpg",
    },
    {
        Name: "Fortnite"
        Descrizione: "Fornite è un videogioco “TPS third person shooter”, in italiano “sparatutto in terza persona”, di genere “Battle Royale”."
        Immagine: "./img/fortnite.jpg",
    },
    {
        Name: "League of Legend"
        Descrizione: " League of Legends è un gioco di strategia in cui due squadre di cinque potenti campioni si affrontano per distruggere la base degli avversari."
        Immagine: "./img/league-of-legends.jpeg",
    },
    {
        Name: "The finals"
        Descrizione: "Ruba, incassa, scappa."
        Immagine: "./img/thefinals.webp",
    },
    {
        Name: "Escape from Tarkov"
        Descrizione: "Escape from Tarkov è un particolare sparatutto ibrido tra FPS, TPS e RPG con elementi online."
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