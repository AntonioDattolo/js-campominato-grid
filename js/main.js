// let grid = document.querySelector('div');
let grid = document.getElementById("my-grid");

let play = document.getElementById("play");
// MILESTONE 3
// play.addEventListener( "click", function(){

//     for (let x=0; x < 100; x++){
//         let square = document.createElement("div"); 
//         grid.append(square)
//         square.classList.add("base-square");
//         square.classList.add("bg-square")
//         square.innerHTML = x;
//     }
// })
//FUNZIONE PER DAR INIZIO AL CICLO DELLA CREAZIONE DELLA GRIGLIA
function start(){
    for (let x = 0; x < 100; x++) {
        let gridCreations = createSquare(x)
    }
}
// ***************FUNZIONE PER LA CREAZIONE DEI QUADRATI DELLA GRIGLIA
function createSquare(y){
    let square = document.createElement("div");
    grid.append(square)
    square.classList.add("base-square");
    square.classList.add("bg-square")
    square.innerHTML = y;
    return square
}

// EVENTO CHE DA IL VIA ALLA CREAZIONE DELLA GRIGLIA
play.addEventListener("click", start)