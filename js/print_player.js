'use strict'


function print_player() {
    if (!move_player())
        return false;

    let all_squares = document.body.getElementsByClassName('square');

    for (let i = 0; i < snake.length; i++)
        all_squares[snake[i].x + snake[i].y * squares].classList.add('snake');

    return true;
}