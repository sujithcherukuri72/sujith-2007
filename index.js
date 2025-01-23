var timer = 60;
var score = 0;
var hitnum = 0;
function makeBubble(){
    var bubbles = "";
for (var i=1;i<=70;i++){
    var num = Math.floor(Math.random()*10);
    bubbles+=`<div class="bubble">${num}</div>`;

}
document.querySelector(".bottombox").innerHTML = bubbles;
}
function getnewhit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rn;
    console.log("rn",rn);
    hitnum = rn;
}

function runTimer(){
   var timerint =  setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer
        }
        else{clearInterval(timerint);
            document.querySelector(".bottombox").innerHTML = `<h1>Game Over - score${score}</h1>`;
        };
        
    }, 1000);

}
function increase(){
    score+=10;
    document.querySelector("#score").textContent = score;
}
document.querySelector(".bottombox").addEventListener('click',function (dets){
    var wantednum = dets.target.textContent
    console.log(Number(wantednum));
    console.log(Number(hitnum));
    if (Number(wantednum) === Number(hitnum)){
        increase();
        makeBubble();
        getnewhit();
        console.log(Number(hitnum));

    }
})

makeBubble();
getnewhit()
runTimer();