let title = document.querySelector("h3");
let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
let comp = [];
let user = [];
let started = false;
let level = 0;
document.addEventListener("keydown",function(){
    if(started == false){
        started = true;
        
        levelUp();
    }

});

function btnFlash(x){
    let colorclass = boxes[x].classList[1];
    boxes[x].classList.remove(`${colorclass}`);
    setTimeout(() => {
            boxes[x].classList.add(`${colorclass}`);
            // console.log("added!!");
        }, 250);
}
function levelUp(){
    level++;
    user=[];
    title.innerText = `level ${level}`;
    let x = Math.floor((Math.random()*10)%4);
    comp.push(boxes[x].getAttribute("id"))
    btnFlash(x)
    console.log(comp);
}
function check(idx){
    // console.log(level);
    if(user[idx]===comp[idx]){
        if(comp.length == user.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        title.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`;
        body.classList.add("bgcolor");
        setTimeout(() => {
            body.classList.remove("bgcolor");
            reset();
            
        }, 150);
    }
    
}
function btnPress(){
    let btn = this;
    let usercolor = this.getAttribute("id");
    user.push(usercolor);
    // console.log(user);
    for(let i=0; i<boxes.length; i++){
        if(boxes[i]==btn){
            btnFlash(i);
            
        }
    }
    check(user.length-1);


}
for(box of boxes){
        box.addEventListener("click", btnPress);
}
function reset(){
    
    started = false;
    comp = [];
    user = [];
    level = 0;
    
    
}
