let btn20 = document.getElementById("20BtnId");
let btn30 = document.getElementById("30BtnId");
let btn40 = document.getElementById("40BtnId");
let btn60 = document.getElementById("60BtnId");
let para = document.getElementById("timer");

let intervalId = null;
let counter = 0;

function clearingPreviousTimers(){
    clearInterval(intervalId);
}
function setTimer(){
    intervalId = setInterval(() => {
        if(counter === 0){
            clearingPreviousTimers();
            para.textContent = "Your moment is complete";
        }else{
            para.textContent = counter + " seconds left";
            counter = counter - 1;
        }
    }, 1000);
}

btn20.onclick = function(){
    counter = 20;
    clearingPreviousTimers();
    setTimer();
}

btn30.onclick = function(){
    counter = 30;
    clearingPreviousTimers();
    setTimer();
}

btn40.onclick = function(){
    counter = 40;
    clearingPreviousTimers();
    setTimer();
}

btn60.onclick = function(){
    counter = 60;
    clearingPreviousTimers();
    setTimer();
}