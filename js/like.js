const $interaction = document.querySelector('.interaction')
const $unlike = document.querySelector('.unlike')
const $like = document.querySelector('.like')

if(isLiked){    
  $like.classList.remove('hidden')
  $unlike.classList.add('hidden')
}
else{
  $like.classList.add('hidden')
  $unlike.classList.remove('hidden')
}

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