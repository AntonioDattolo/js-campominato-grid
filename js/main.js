// let grid = document.querySelector('div');
let grid = document.getElementById("my-grid");
for (let x=0; x < 100; x++){
    let square = document.createElement("div"); 
    grid.append(square)
    square.classList.add("base-square");
    square.innerHTML = x;
}