var page = document.querySelector('.page')
var split = page.querySelector('.page-split')
split.style.height = split.getBoundingClientRect().height + "px"

function toManyRows(el) {
  var outerHeight = el.getBoundingClientRect().height
  var innerHeight = Array.from(main.children).reduce(function(prev, curr){
    return prev + curr.clientHeight
  }, 0)

  return innerHeight > outerHeight
}

function checkPage(el) {
}

function clonePage(page) {
  var new_page = page.cloneNode(true)
  var tbody = new_page.querySelector('tbody')
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  return new_page
}