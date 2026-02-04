let input = document.querySelector("input");
let btn = document.querySelector("#my");
let ul = document.querySelector("ul");
let task = input.value;
// input.addEventListener("change", function(){
//     console.log(this.value);
// });
btn.addEventListener("click", function(){
    if(input.value != ""){
        // ul.innerHTML += `<li>${input.value}</li>`;
        let text = document.createElement("li");
        let del = document.createElement("button");
        del.innerText = "X";
        del.classList.add("del");
        text.innerText = `${input.value}`;
        text.appendChild(del);
        ul.appendChild(text);
        input.value = "";
        del.addEventListener("click", function(){
            this.parentElement.remove();
            // console.log("deleted!");
        });
    }
});
input.addEventListener('keydown', function(e){
    if(input.value != "" && e.key == 'Enter'){
        // ul.innerHTML += `<li>${input.value}</li>`;
        let text = document.createElement("li");
        let del = document.createElement("button");
        del.innerText = "X";
        del.classList.add("del");
        text.innerText = `${input.value}`;
        text.appendChild(del);
        ul.appendChild(text);
        input.value = "";
        del.addEventListener("click", function(){
            this.parentElement.remove();
            // console.log("deleted!");
        });
    }
});
