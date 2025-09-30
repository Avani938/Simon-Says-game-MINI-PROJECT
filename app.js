
let gameSeq = [];
let userSeq = []; 
let btns = ["red" , "yellow", "green", "purple"]; 

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 
 
document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game started");
        started = true; 

        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash"); 
     setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function levelUp() { 
    userSeq = []; 
level ++;
h2.innerText = `Level ${level}`; 

//random btn
let ranIdx = Math.floor(Math.random() * 3);
let ranColor = btns[ranIdx];
let randBtn = document.querySelector(`.${ranColor}`);
console.log(ranIdx);
console.log(ranColor);
console.log(randBtn); 

gameSeq.push(ranColor);
console.log(gameSeq); 
btnFlash(randBtn);
}

function checkAns(idx) {
    //let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        console.log("same value");
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
        },150);

        
        reset();
        
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn); 

    userColor = btn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor); 

    checkAns(userSeq.length-1);
}  
 let allBtn = document.querySelectorAll(".btn");
 for (btn of allBtn) {
    btn.addEventListener("click" , btnPress); 
 }

 function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
 }