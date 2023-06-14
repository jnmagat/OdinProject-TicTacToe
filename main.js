
let boxes = document.querySelectorAll(".box");
let modal = document.querySelector(".modal");
modal.classList.add("hide");
let playButton = document.getElementById("pa_btn");
let winnerText = document.querySelector(".winner_section");
let text = document.createElement("h2");
let player_1 = false;
let player_2 = false;



const winCombos = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [0,4,8]
];

let board = [];

boxes.forEach(box=>{
    player_1 = true;
    box.addEventListener("click",  e =>{
        if(player_1==true && player_2 == false){
            box.classList.add("black");
            board[e.target.id] = 1 ;
            player_2 = true;
            player_1 = false;
        }
        else if(player_2==true && player_1 == false){
            box.classList.add("red");
            board[e.target.id] = 2;
            player_1 = true;
            player_2 = false;
        }
        checkWinner();
    });
});


const checkWinner = () =>{
    
let p1Point = 0;
let p2Point = 0;

    for(let i = 0; i< winCombos.length; i++){
        for(let j = 0; j<=2; j++){
            if(board[winCombos[i][j]] == 1 ){
                p1Point++;
            }
            else if(board[winCombos[i][j]] == 2 ){
                p2Point++;
            }
        } 
        if(p1Point==3){
            console.log("Player 1 Win");
            player_2 = false;
            text.innerHTML = "Player 1 Wins!";
            winnerText.appendChild(text);
            modal.classList.add("show");
            modal.classList.remove("hide");
        }
        else if(p2Point==3){
            console.log("Player 2 Win");
            player_1 = false;
            text.innerHTML = "Player 2 Wins!";
            winnerText.appendChild(text);
            modal.classList.add("show");
            modal.classList.remove("hide");

        }
        else{
            p1Point = 0;
            p2Point = 0;
        }
    }
}

playButton.addEventListener("click", ()=>{
    modal.classList.add("hide");
    modal.classList.remove("show");
    board = [];
    p1Point = 0;
    p2Point = 0;
    player_1 = true;
    player_2 = false;
    boxes.forEach(box=>{
        box.classList.remove("black");
        box.classList.remove("red");
    });
    winnerText.removeChild(text);
});