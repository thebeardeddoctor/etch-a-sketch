const body = document.querySelector("body");
const color=document.getElementsByClassName('.color')


let divcolor='black'




function createGrid(squares){
 let clearboard = document.querySelectorAll('newbox')
 clearboard.forEach((div)=>div.remove())
 const board=document.querySelector('.container');
 board.style.gridTemplateColumns= `repeat(${squares}, 1fr)`;
 board.style.gridTemplateRows=`repeat(${squares}, 1fr)`;
  let size= squares**2 

 for (let i=0; i<=size; i++){
  let square=document.createElement("div");
  square.classList.add('newbox')
  square.style.backgroundColor="orange";
  board.appendChild(square);
  console.log(i)
  square.addEventListener("mouseover", etchasketch)
 }
}

function etchasketch(){
 this.style.backgroundColor=divcolor;
}
function changeColor(colors){
 if(colors==="random"){
  divcolor=`hsl(${Math.random()*360}, 100%, 50%)`
 }else{
 divcolor=colors;
}
}
function pauseGame(){

}

function resetGame(){
 let board = document.querySelector('container');
 let squares= document.querySelectorAll('.newbox')
 squares.forEach((div)=> (div.style.backgroundColor='transparent'))
  console.log("dasdf")
}

