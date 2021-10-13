var dino = document.getElementById("dino");
var cacto = document.getElementById("cacto");
var counter=0;
function pulo(){
    if(dino.classList == "animar"){return}
    dino.classList.add("animar");
    setTimeout(function(){
        dino.classList.remove("animar");
    },300);
}
var checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));
    if(cactoLeft<20 && cactoLeft>-20 && dinoTop>=220){
        cacto.style.animation = "none";
        alert("Cê perdeu patrão. pontuação: "+Math.floor(counter/100));
        counter=0;
        cacto.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);