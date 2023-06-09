ScrollReveal().reveal('#intro *', {
  cleanup: true,
  distance: '20%',
  interval: 100,
  origin: 'bottom',
})

window.onscroll = () => {
  document.getElementById('gallery').style.marginLeft = `-${window.pageYOffset / 2}px`
}
