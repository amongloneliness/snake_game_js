'use strict'

let food = new Point(0, 0);

function create_food() {
    food.x = Math.floor(Math.random() * squares);
    food.y = Math.floor(Math.random() * squares);

    return;
}