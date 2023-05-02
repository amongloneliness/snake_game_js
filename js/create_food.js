'use strict'

let food = new Point(0, 0);

function create_food() {
    food.x = Math.floor(Math.random() * squares);
    food.y = Math.floor(Math.random() * squares);

    for (let i = 0; i < snake.length; i++)
        if (snake[i].x == food.x && snake[i].y == food.y)
            create_food();

    return;
}