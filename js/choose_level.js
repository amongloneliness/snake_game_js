'use strict'

function choose_level(level) {
    document.body.getElementsByClassName('chosen')[0].classList.toggle('chosen');
    document.body.getElementsByClassName('choose__option')[level - 1].classList.toggle('chosen');

    return;
}