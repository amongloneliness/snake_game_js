'use strict'

let player_y = Math.floor(Math.random() * (squares * level));
let player_x = Math.floor(Math.random() * (squares * level));

function create_player() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(2, 174, 105)";
    ctx.fillRect(0, 0, 100, 100);

    return;
}

function print_player() {

    let all_squares = document.body.getElementsByClassName('square');

    console.log(player_x);
    console.log(player_y);

    for (let i = 0; i < squares * level * level * squares; i++)
        all_squares[i].classList.remove('snake');

    all_squares[player_y + player_x * squares * level].classList.toggle('snake');

    return;
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp')
        player_x--;
    else if (event.code == 'ArrowDown')
        player_x++;
    else if (event.code == 'ArrowLeft')
        player_y--;
    else if (event.code == 'ArrowRight')
        player_y++;
    
    print_player();
  });