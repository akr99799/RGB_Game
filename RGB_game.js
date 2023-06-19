var num = 6;
var colors = generate_color(num);

var picked_color = picked_colors();
var squares = document.querySelectorAll(".square");
var rgb_color = document.querySelector("#rgb_color");
var current_status = document.querySelector("#status");
var para = document.querySelector(".para");
var play_again = document.querySelector("#again");
var reset_button = document.querySelector("#reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

easy.addEventListener("click", function () {
    easy.classList.add("seleted");
    hard.classList.remove("seleted");
    num = 3;
    colors = generate_color(num);
    console.log(colors);
    picked_color = picked_colors();
    rgb_color.innerText = picked_color;
    para.style.backgroundColor = "steelblue";
    current_status.innerText = "";
    play_again.innerText = "NEW COLORS";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function () {
    hard.classList.add("seleted");
    easy.classList.remove("seleted");
    num = 6;
    colors = generate_color(num);
    picked_color = picked_colors();
    rgb_color.innerText = picked_color;
    para.style.backgroundColor = "steelblue";
    current_status.innerText = "";
    play_again.innerText = "NEW COLORS";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset_button.addEventListener("click", function () {
    colors = generate_color(num);
    console.log(colors);
    picked_color = picked_colors();
    rgb_color.innerText = picked_color;
    para.style.backgroundColor = "steelblue";
    current_status.innerText = "";
    play_again.innerText = "NEW COLORS";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});
rgb_color.innerText = picked_color;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var temp = this.style.backgroundColor;
        if (temp === picked_color) {
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = picked_color;
            }
            play_again.innerText = "Play Again??";
            current_status.innerText = "Correct!";
            para.style.backgroundColor = picked_color;
        }
        else {
            this.style.backgroundColor = "#232323";
            current_status.innerText = "Try Again!!";
        }
    });
}



/* function reset(){
    colors = generate_color(6);
    return colors;
} */

function picked_colors() {
    random_number = Math.floor(Math.random() * colors.length);
    return colors[random_number];
}

function generate_color(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(random_color());
    }
    return arr;
}

function random_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
/* console.log(temp); */

