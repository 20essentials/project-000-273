const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const $containerCards = $('.container-cards');
const $prevButton = $('.prev');
const $nextButton = $('.next');
let variableTimetOut = null;

function addAndRemoveTimeOut(e) {
  if (variableTimetOut) clearTimeout(variableTimetOut);
  e.target.classList.add('activo');
  variableTimetOut = setTimeout(() => {
    e.target.classList.remove('activo');
  }, 350);
}

document.addEventListener('click', e => {
  if (e.target === $prevButton) {
    addAndRemoveTimeOut(e);
    let $cards = $$('.card');
    $containerCards.prepend($cards[$cards.length - 1]);
  }

  if (e.target === $nextButton) {
    addAndRemoveTimeOut(e);
    let $cards = $$('.card');
    $containerCards.appendChild($cards[0]);
  }
});
