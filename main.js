document.querySelectorAll('.demo-contents').forEach($view => {
  const fragment = document.createDocumentFragment()
  new Array(50).fill('').forEach((item, index) => {
    const $div = document.createElement('div')
    $div.style.width = '150%'
    $div.innerHTML = `line ${index + 1}`
    fragment.appendChild($div)
  })
  $view.appendChild(fragment)
})
