const $commentBtn = document.querySelector('.comment-btn');
const $commentInput = document.querySelector('.write-comment input')

$commentBtn.addEventListener('click', e => {
  $commentInput.focus()
})