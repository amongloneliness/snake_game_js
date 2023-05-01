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

let state = 'none'

function print_player() {
    if (state == 'left')
        player_y--;
    else if (state == 'right')
        player_y++;
    else if (state == 'up')
        player_x--;
    else if (state == 'down')
        player_x++;


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
        state = 'up';
    else if (event.code == 'ArrowDown')
        state = 'down';
    else if (event.code == 'ArrowLeft')
        state = 'left';
    else if (event.code == 'ArrowRight')
        state = 'right';
  });