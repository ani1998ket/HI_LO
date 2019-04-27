var diceImagesRed = [
                    "res/images/dieRed1.png",
                    "res/images/dieRed2.png",
                    "res/images/dieRed3.png",
                    "res/images/dieRed4.png",
                    "res/images/dieRed5.png",
                    "res/images/dieRed6.png"
                ];

let diceValue = 1;
let score = 0;
let animationLoop;
let frame = 0;
let angle = 0;
let isgameOver = false;

reset();
function buttonPress(buttonPress){
    // diceValue = ((diceValue%6)+6)%6;
    btn_high.disabled = true;
    btn_low.disabled = true;
    let oldDiceValue = diceValue;
    diceValue = 1 + Math.round(Math.random() * 5);
    if(diceValue >= oldDiceValue && buttonPress){
        score++;
    }else
    if(diceValue <= oldDiceValue && !buttonPress){
        score++;
    }else{
        isgameOver = true;
    }
    rollDiceSound.play();
    animationLoop = window.setInterval(rollDice, 30); 
}

function gameOver(){
    title_box.innerHTML = "You lost. Score :" + score;
    title_box.style.color = "red";
    window.setTimeout(reset, 1000);
}
function reset(){
    score = 0;
    title_box.style.color = "white";
    score_box.innerHTML = score;    
    isgameOver = false;
    title_box.innerHTML = "Predict the next value";
}
function rollDice(){
    
    frame++;
    angle = 10 * Math.sin(frame);
    if(frame > 50) {
        frame = 0;
        angle = 0;
        clearInterval(animationLoop);
        dice_image.src = diceImagesRed[diceValue - 1];
        console.log(score);
        if(isgameOver){
            window.setTimeout(gameOver, 500);
        }
        score_box.innerHTML = score;
        btn_high.disabled = false;
        btn_low.disabled = false;
    }
    dice_image.style.transform = "rotate("+angle+"deg)";
    
    
}