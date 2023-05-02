'use strict'

function dead_player() {
    let all_squares = document.body.getElementsByClassName('square');

    for (let i = 0; i < snake.length; i++)
        all_squares[snake[i].x + snake[i].y * squares].classList.add('snake_dead');

    return;
}