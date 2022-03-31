const $interaction = document.querySelector('.interaction')
const $unlike = document.querySelector('.unlike')
const $like = document.querySelector('.like')

$interaction.addEventListener('click', e => {
  if(e.target.className === 'unlike'){
    $like.classList.toggle('hidden')
    $unlike.classList.toggle('hidden')
  }
  else if(e.target.className === 'like'){
    $like.classList.toggle('hidden')
    $unlike.classList.toggle('hidden')
  }
})