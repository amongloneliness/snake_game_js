'use strict'

function replay_game() {
    let replayWrapper = document.body.getElementsByClassName('replayWrapper');

    replayWrapper[0].classList.toggle('hidden');

    sleep(300).then(() => { 
        replayWrapper[0].classList.toggle('d-none');
    });

    create_player();
    create_food();

    game_interval = setInterval(update, 70);

    return;
}