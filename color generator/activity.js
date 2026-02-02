let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let innerdiv = document.querySelector('.inner');
btn.addEventListener("click", function(){
    let color = getRandomColor()
    heading.innerText = color
    innerdiv.style.backgroundColor = color;
    document.querySelector("p").style.backgroundColor = color;
});
function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}