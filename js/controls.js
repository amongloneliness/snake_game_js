'use strict'


let state = 'none'

document.addEventListener('keydown', function(event) {
    state = (event.code == 'ArrowUp' && state != 'down') ? 'up' :
        (event.code == 'ArrowDown' && state != 'up') ? 'down' :
        (event.code == 'ArrowLeft' && state != 'right') ? 'left' :
        (event.code == 'ArrowRight' && state != 'left') ? 'right' : state;
});