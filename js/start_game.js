'use strict'

let squares = 16;

function start_game() {
    let chooseWrapper = document.body.getElementsByClassName('chooseWrapper');
    let gameWrapper = document.body.getElementsByClassName('gameWrapper');

    chooseWrapper[0].classList.toggle('hidden');

    sleep(300).then(() => { 
        chooseWrapper[0].classList.toggle('d-none');
        gameWrapper[0].classList.toggle('d-none');
        gameWrapper[0].classList.toggle('hidden');
    });

    print_ground(level * squares);

    return;
}