const $commentButton = document.querySelector('.comment-btn');
const $commentInput = document.querySelector('.write-comment input')

$commentButton.addEventListener('click', e => {
  $commentInput.focus()
})