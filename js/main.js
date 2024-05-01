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
//          square.addEventListener("click",function(){
    //     square.innerHTML += `il numero della cella è ${y}`;
    //     square.classList.add("selected");
    //     },{once:true})
//     }
// })

//MILESTONE 4
//FUNZIONE PER DAR INIZIO AL CICLO DELLA CREAZIONE DELLA GRIGLIA

function start(){

    
    
    
    
    if( opt[2].selected == true){

        for (let x = 1; x <= 100; x++) {
            let gridCreations = createSquare(x) 
            grid.append(gridCreations)      
        }
    } else if( opt[1].selected == true){ 
        for (let x = 1; x <= 81; x++) {
        let gridCreations = createSquare(x) 
        grid.append(gridCreations)
        }       
    }else if( opt[0].selected == true){
        for (let x = 1; x <= 49; x++) {
            let gridCreations = createSquare(x) 
            grid.append(gridCreations)
        }  
        
    }
    
}

// ***************FUNZIONE PER LA CREAZIONE DEI QUADRATI DELLA GRIGLIA
function createSquare(y){
    let square = document.createElement("div");
    // grid.append(square)
    square.classList.add("base-square");
    square.classList.add("bg-square")
    //  square.innerHTML = y;
    square.addEventListener("click",function(){
        square.innerHTML += `il numero della cella è ${y}`;
        square.classList.add("selected");
    },{once:true})
    return square   
}

// EVENTO CHE DA IL VIA ALLA CREAZIONE DELLA GRIGLIA
play.addEventListener("click", start, {once:true})

//*******BONUS 3*********/
let form = document.forms[`select-diff`];
console.log(form)
let menu = form.difficoltà
console.log(menu)
let opt = form.difficoltà.options ;
console.log(opt)

///*****

 

