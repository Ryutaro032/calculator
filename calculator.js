const display = document.getElementById("display");
let total = 0;
let state = "start";
let mode  = "integer";

const number = document.querySelectorAll(".number");
number.forEach(num => {
    num.addEventListener("click",function(){
        console.log(num.dataset.numberId)
        if(state === "start"){
            total = num.dataset.numberId;
        }else if(state === "finish"){
            total = 0; 
            display.textContent = 0;
            state = "start";
            mode ="integer";
            total = num.dataset.numberId;
        }else if(state === "continue"||state === "calBtn"){
            total += num.dataset.numberId;
            console.log(state);
        }     
        display.textContent = total;
        state = "continue";
    });
});

const zero = document.querySelectorAll(".zero");
zero.forEach(zeroNum =>{
    zeroNum.addEventListener("click",function(){
        console.log(zeroNum.dataset.numberId);
    
        if(state === "start" ||state === "finish"){
            if(display.textContent.slice(-1) === "0"){
                console.log("前の文字はゼロ");
                return;
            }
        }
        
        if(state === "calBtn"){
            if(display.textContent.slice(-1) === "+"){
                console.log("前の文字+");
                return;
            }else if(display.textContent.slice(-1) === "-"){
                console.log("前の文字-");
                return;
            }else if(display.textContent.slice(-1) === "*"){
                console.log("前の文字*");
                return;
            }else if(display.textContent.slice(-1) === "/"){
                console.log("前の文字/");
                return;
            }
        }
        if(state==="start") {
            total = zeroNum.dataset.numberId;  
        }else{
            total += zeroNum.dataset.numberId;
        }    
        display.textContent = total;
        state = "continue";
    });
});

const calculation = document.querySelectorAll(".calculation");
calculation.forEach( cal =>{
    cal.addEventListener("click",function(){
        console.log(cal.dataset.numberId);
        if(state === "start") {
            return;
        }else if(state === "continue"){
            total += cal.dataset.numberId;
        }else if(state === "finish"){
            total = display.textContent;
            total += cal.dataset.numberId;
            display.textContent = 0;
        }else if(state ==="calBtn") {
            total = total.slice(0, -1);
            total += cal.dataset.numberId;
        }
        display.textContent = total;
        state = "calBtn";
        mode  = "integer";
    });
});

const point = document.getElementById("point");
point.addEventListener("click",function(){
    console.log(point.dataset.numberId);
    
    if(mode === "decimal"){
        return;
    }
    if(state === "start"||state === "finish") {
        total = 0;
    }
    total += point.dataset.numberId;

    display.textContent = total;
    state = "continue";
    mode  = "decimal";
});

const equal = document.getElementById("equal");
equal.addEventListener("click",function(){
    console.log(eval(total));
    display.textContent = eval(total);
    state = "finish";
    mode  = "integer";
});

const clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    total = 0; 
    display.textContent = 0;
    state = "start";
    mode  = "integer";
});