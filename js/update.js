'use strict'

function update() {
    if (player_status) {
        print_ground();
        print_food();
        print_player();

        document.body.getElementsByClassName('score')[0].textContent = score;
    }

    return;
}