
var Jumpy;
var Score_Board;
var Obj;
var score = 0;
var score_text; 

function init() {
    score = 0;
    Score_Board = document.getElementById("score_board");
    score_text = document.createTextNode('Score: '+ toString(score));
    setInterval(isAlive);
    setInterval(updateScore);
    Obj.style.animation = "object_keyframe 3s infinite linear";
}

function jump(event) {
    Jumpy = document.getElementById("jumpy");
    if(event.charCode ==  32)
        Jumpy.classList.add("anim");

    setTimeout(function() {
        Jumpy.classList.remove("anim");
    }, 500);
}

var updateScore = setInterval(function() {
    ++score;
    Score_Board.innerText =  "Score: " + score;
}, 100);

var isAlive = setInterval(function() {
    Jumpy = document.getElementById("jumpy");
    Obj = document.getElementById("object");
    jumpy_x = Jumpy.getBoundingClientRect().top;
    jumpy_y = Jumpy.getBoundingClientRect().left;
    obj_x = Obj.getBoundingClientRect().top;
    obj_y = Obj.getBoundingClientRect().left;
    if(obj_x <= jumpy_x && obj_y <= 20 ) {
        alert("Game Over!!! \nYour Score: " + score);
        init();
    }
}, 10);


