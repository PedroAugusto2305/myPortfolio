document.querySelectorAll('a').forEach(link => {
  const content = document.getElementById('#navbar')

  link.onclick = function (e) {
    e.preventDefault()
    fetch(link.getAttribute('wm-nav'))
      .then(resp => resp.text())
      .then(html => (content.innerHTML = html))
  }
})
