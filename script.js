let boxes = document.querySelectorAll("#btn")
let resetbtn = document.getElementById("reset")
let start = document.getElementById("start")
let msg = document.getElementById("winner");
let condition = true; //true = x , false = o :for turn

let count = 0 // when count click = 9 game is draw

let board = document.getElementById("game-board");



 let winpattern = 
 [
//horizontal
[0,1,2],
[3,4,5],
[6,7,8],
// vertical
[0,3,6],
[1,4,7],
[2,5,8],
//digonal
[2,4,6],
[0,4,8],
 ]

 boxes.disabled = true; // if btn disable  = true it can't be click until use press stART BUTTON


boxes.forEach((box) =>{
  box.addEventListener("click", function name() {
    console.log("you click the box");
    
    if (condition) {
      box.innerText ="X"  // yurn
      condition = false
    }
    else {
      box.innerText ='O'
      condition =  true;
    }
    // count++
    CountDraw()
    CheckWinner()
  box.disabled = true// after the turn it again disable cuz click value can't change

  })

})

 start.addEventListener("click", function () {
disbtn(false) // now button are clickable
ResetGame()
// Thoda sa delay (millisecond) taake CSS class apply hone ka waqt mile
setTimeout(() => {
  board.classList.add("active");
}, 100);

// 1. Board ko show karo
  board.style.display = "grid"; 
  
  // 2. Start button ko hide kar do (optional: takay screen saaf lage)
  start.style.display = "none";
 resetbtn.style.display= "block"  
   

 })


 const ResetGame = function  (reset) { // reset the game
  boxes.forEach(function (box) {
    
    box.innerText =""
    console.log("clear");
   disbtn(false)
  })
  msg.innerText ="" 
  count = 0
  console.log(count);
  condition = true //
}


//disablebtn
const disbtn = (con = true)=>{
  for (const box of boxes) {
      box.disabled = con

  }
}

//draw
function CountDraw() {
  ++count
  console.log(count);
  
}

 //winner
const showWinner = (winner) =>{

  msg.innerText =` Congratulation  ${winner} is the winner`
  
}

 function CheckWinner() {
 

for (let pattern of winpattern){
    let [ a,b,c] = pattern //confusion
    let posval1 = boxes[pattern[0]].innerText// box position = pattern index
    let posval2 = boxes[pattern[1]].innerText
    let posval3= boxes[pattern[2]].innerText
console.log( posval1,posval2,posval3);

if (posval1 != ""&& posval2 != "" && posval3!="") {
  if (posval1===posval2&&posval2===posval3 ){
    console.log("winner",posval1);
    showWinner(posval1)
    disbtn(true)// winner declare hony ky bad change nhi hoga
    start.innerText =" New Match"
    return
  
}}

}
// loop end ab check karty ky draw ha ya nhi
   if (count === 9) {
    msg.innerText = `Match is draw`;
    start.innerText = "New Match";
  }
}

 resetbtn.addEventListener('click', ResetGame)
//  start.addEventListener('click', ResetGame)