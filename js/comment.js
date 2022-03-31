const $comments = document.querySelector('.comments')
const $writeCommentBtn = document.querySelector('.write-comment button')

const userName = 'I love puppy'

$writeCommentBtn.addEventListener('click', e => {
  $comments.insertAdjacentHTML('beforeend',`
    <div class="comment">
      <img class="profile-image" src="assets/puppy.jpeg" alt="profile-picture" />
      <p class="weight">${userName}</p>
      <p>${$commentInput.value}</p>
    </div>
  `
  );
  $commentInput.value = ''
})