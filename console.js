const btnEl = document.querySelector('.btn')

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper')
  const iconEl = btnEl.querySelector('i')

  wrapperEl.classList.toggle('active')

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line')
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line')
  }
}

btnEl.addEventListener('click', toggleOptions)

function darkMode() {
  document.body.classList.add('dark')
}

function lightMode() {
  document.body.classList.remove('dark')
}

function wa() {
  navigator.clipboard.writeText('https://wa.me/5588981583359')
}
function ig() {
  navigator.clipboard.writeText('https://www.instagram.com/m4nu.vic/')
}
function gh() {
  navigator.clipboard.writeText('https://github.com/im4nu')
}
function allert() {
  swal({
    title: 'Valeu!',
    text: 'Link de compartilhamento copiado! 😎🤙',
    icon: 'success'
  })
}
