// let grid = document.querySelector('div');
let grid = document.getElementById("my-grid");

let play = document.getElementById("play");

play.addEventListener( "click", function(){

    for (let x=0; x < 100; x++){
        let square = document.createElement("div"); 
        grid.append(square)
        square.classList.add("base-square");
        square.classList.add("bg-square")
        square.innerHTML = x;
    }
})