let first = false ; 
let player = document.querySelectorAll('.player') ; 
let boxes = document.querySelectorAll('.box') ; 
let RoundNum = document.getElementById('RoundNum') ; 
let xScoreSpan = document.getElementById('xScore') ; 
let oScoreSpan = document.getElementById('oScore') ; 
let container = document.getElementById('yyy');
let gameOver = false ; 
let xScore =0, oScore = 0 ; 
let cnt = 0 ; 
let NewGame = document.getElementById('test2') ;
let gameEnded = false;
let button = document.getElementById('playAgainBtn') ;


// reset

function reset() {
for (let i = 0 ; i<boxes.length ; i++) { 
    boxes[i].firstElementChild.textContent = "" ; 
    boxes[i].style.background = "white";
}
gameOver = false; 
}

// playAgain
function playAgainFunction() { 
    RoundNum.textContent = 1;
    gameEnded = false;
    container.style.opacity='1';
    container.style.filter = 'none';
    NewGame.style.opacity = '0';
    xScore =0, oScore = 0 ; 
    gameOver = false ; 
    xScoreSpan.textContent = 0 ;
    oScoreSpan.textContent = 0 ;
}
reset() ;

        window.addEventListener('click',e=>{
        if (e.target.classList.contains('box') && e.target.firstElementChild.textContent === "" && !gameEnded) {
            let audio = new Audio('click.wav');
            audio.volume = 0.1 ;
            audio.play();
            if (!first) {
            cnt++;    
            
            player[0].removeAttribute('id');  
            player[1].setAttribute('id','current') ;
            e.target.firstElementChild.textContent = 'X' ;
            first = !first ; 
            }
            else { 
                cnt++;    
                player[0].setAttribute('id','current') ;
                player[1].removeAttribute('id');  
                e.target.firstElementChild.textContent = 'O' ;
                first = !first ; 
            }
            if (!gameOver) {
            if (CheckH() || CheckV() || CheckD()) { 
                gameOver = true ;
            
                setTimeout(reset , 500);
                RoundNum.textContent++;
            }
          
        }
        if(RoundNum.textContent ==='4'){
            RoundNum.textContent--;
            gameEnded = true;
            container.style.opacity='0.3';
            container.style.filter = 'blur(7px)';
            NewGame.style.opacity = '1';
            console.log(gameEnded)   
        }
    }
        
    });

    
    function setScore(i){

        if(boxes[i].firstElementChild.textContent == 'X'){
            xScore++;
            xScoreSpan.textContent = xScore;    
        }
        else{
            oScore++;
            oScoreSpan.textContent = oScore;
        } 
        

    }



// Check horizontally 
function CheckH() {
    for (let i = 0 ; i<8 ; i+=3) {
    if (boxes[i].firstElementChild.textContent === boxes[i+1].firstElementChild.textContent && boxes[i+1].firstElementChild.textContent 
        === boxes[i+2].firstElementChild.textContent
        && boxes[i].firstElementChild.textContent !== "") { 
        boxes[i].style.background = "#8062c5" ; 
        boxes[i+1].style.background = "#8062c5" ; 
        boxes[i+2].style.background = "#8062c5" ; 
        setScore(i);
        return true ; 
} 
}
return false ; 
}

 // Check Vertically 
function CheckV() {
    for (let i = 0 ; i<3 ; i++) {
    if (boxes[i].firstElementChild.textContent === boxes[i+3].firstElementChild.textContent && boxes[i+3].firstElementChild.textContent 
        === boxes[i+6].firstElementChild.textContent
        && boxes[i].firstElementChild.textContent !== "") { 
            boxes[i].style.background = "#8062c5" ; 
            boxes[i+3].style.background = "#8062c5" ; 
            boxes[i+6].style.background = "#8062c5" ; 
            setScore(i);
        return true ; 
    } 
}
return false ; 
} 
// Check Diagonal 
function CheckD() {
        if (boxes[0].firstElementChild.textContent === boxes[4].firstElementChild.textContent && boxes[4].firstElementChild.textContent 
            === boxes[8].firstElementChild.textContent
            && boxes[0].firstElementChild.textContent !== "") { 
                boxes[0].style.background = "#8062c5" ; 
                boxes[4].style.background = "#8062c5" ; 
                boxes[8].style.background = "#8062c5" ; 
                setScore(0);
            return true ; 
        } 
        if (boxes[2].firstElementChild.textContent === boxes[4].firstElementChild.textContent && boxes[4].firstElementChild.textContent 
            === boxes[6].firstElementChild.textContent
            && boxes[2].firstElementChild.textContent !== "") { 
                boxes[2].style.background = "#8062c5" ; 
                boxes[4].style.background = "#8062c5" ; 
                boxes[6].style.background = "#8062c5" ; 
                setScore(2);
            return true ; 
        } 
    return false ; 
}


button.addEventListener('click',()=>{
   playAgainFunction();
})
