'use strict'


let squares = 16;
let game_interval;

function start_game() {
    let chooseWrapper = document.body.getElementsByClassName('chooseWrapper');
    let gameWrapper = document.body.getElementsByClassName('gameWrapper');

    chooseWrapper[0].classList.toggle('hidden');

    sleep(300).then(() => { 
        chooseWrapper[0].classList.toggle('d-none');
        gameWrapper[0].classList.toggle('d-none');
        gameWrapper[0].classList.toggle('hidden');
    });

    create_ground(level * squares);
    create_player();
    create_food();

    game_interval = setInterval(update, 70);

    document.addEventListener('keydown', function(event) {
        state = (event.code == 'ArrowUp' && state != 'down') ? 'up' :
            (event.code == 'ArrowDown' && state != 'up') ? 'down' :
            (event.code == 'ArrowLeft' && state != 'right') ? 'left' :
            (event.code == 'ArrowRight' && state != 'left') ? 'right' : state;
    });

    return;
}