//Events
function Priya(name){
    alert("Welcome " + name + " to our site");
}
document.getElementById("btn").addEventListener("click",function(){
    alert("You have clicked the button Just Now - Onclick");

})
document.addEventListener("DOMContentLoaded",() => Priya("Developer"));
document.addEventListener("DOMContentLoaded",function() {
    document.body.style.backgroundColor="rgb(250,165,120)";
});

document.getElementById("btn").addEventListener("click",function(){
        // console.log("==>",document.body.style);
        document.body.style.backgroundColor="rgb(255,165,40)";
    });

//style background of box color
let box = document.getElementById("box");
box.addEventListener("mousemove", function() {
    document.getElementById("box").style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    //style background color of body
    document.body.style.backgroundColor=`rgb(${Math.floor(Math.random() * 205)}, ${Math.floor(
        Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)})`;
});


