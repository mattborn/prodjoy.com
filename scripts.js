const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

ScrollReveal().reveal('#intro *', {
  cleanup: true,
  distance: '20%',
  interval: 100,
  origin: 'bottom',
})

q('.see-plans').forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault()
    g('plans').scrollIntoView({ behavior: 'smooth' })
  }),
)

if (location.pathname.startsWith('/staging')) {
  window.onscroll = () => {
    q('.gallery')[0].style.marginLeft = `-${window.pageYOffset / 2}px`
  }

  //github.com/markedjs/marked/releases/tag/v5.0.1
  marked.use({
    headerIds: false,
    mangle: false,
  })

  fetch('/faq.md')
    .then(response => response.text())
    .then(text => (g('faqs').innerHTML = marked.parse(text)))
}
