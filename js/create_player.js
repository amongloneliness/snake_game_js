'use strict'


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

let snake = [new Point(0, 0)];

function create_player() {
    snake[0].x = Math.floor(Math.random() * squares);
    snake[0].y = Math.floor(Math.random() * squares);

    return;
}