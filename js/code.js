let input = document.querySelector("#input");
let btnString = document.querySelector("#string");
let btnNumber = document.querySelector("#number");
let btnBoolean = document.querySelector("#boolean");
let result = document.querySelector("#result");

btnString.onclick = function(){
    if(input.value == ""){
        result.style.color = "#ff0000";
        result.textContent = "The file must be fill-out to string";
    }else{

        result.style.color = "#eee";
        result.textContent = typeof toString(input.value);
        input.value="";

    }
}
btnNumber.onclick = function(){
    if(input.value == ""){
        result.style.color = "#ff0000";
        result.textContent = "The file must be fill-out to number";
    }else{
        result.style.color = "#eee";
        result.textContent = typeof parseInt(input.value);
        input.value="";


    }
}
btnBoolean.onclick = function(){
    if(input.value == ""){
        result.style.color = "#ff0000";
        result.textContent = "The file must be fill-out to boolean";
    }else{


        result.style.color = "#eee";
        result.textContent = typeof Boolean(input.value);
        input.value="";

    }
}



//=======================Efecto Parallax=====================
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer=>{
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}