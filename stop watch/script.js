let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isrunning = false;
let display = document.getElementById("clock");

function start(){
    if(!isrunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime =0;
    isrunning=false;
    display.textContent=`00:00:00:00`;
}
function stops(){
    if(isrunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isrunning = false;
    }
}
function update(){
    let current = Date.now();
    elapsedTime = current - startTime;
    let hour = Math.floor(elapsedTime/(1000*60*60));
    let min = Math.floor(elapsedTime/(1000*60)%60);
    let sec = Math.floor(elapsedTime/1000%60);
    let mil = Math.floor(elapsedTime%1000/10);
    hour = String(hour).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    mil = String(mil).padStart(2,"0");
    display.textContent = `${hour}:${min}:${sec}:${mil}`;
}