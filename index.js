var interval;
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');

function changeColor(a,b,c,d,e) {
    box1.style.backgroundImage = "linear-gradient(to bottom, black " + a + "%, #8A2BE2 " + a + "%)";
    box2.style.backgroundImage = "linear-gradient(to bottom, black " + b + "%, #a03ca0 " + b + "%)";
    box3.style.backgroundImage = "linear-gradient(to bottom, black " + c + "%, #ff7c7c " + c + "%)";
    box4.style.backgroundImage = "linear-gradient(to bottom, black " + d + "%, #f59666 " + d + "%)";
    box5.style.backgroundImage = "linear-gradient(to bottom, black " + e + "%, #fbb900b0 " + e + "%)";
}

document.getElementById("startbtn").onclick = function() {
    interval = setInterval(function(){ changeColor(getRandom(),getRandom(),getRandom(),getRandom(),getRandom()); }, 500);
};
document.getElementById("stopbtn").onclick = function() {
    clearInterval(interval);
};

function getRandom(){
    return Math.floor(Math.random() * 100) + 1;
}
