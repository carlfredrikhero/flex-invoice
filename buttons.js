  addRow.onclick = function(ev){
    ev.preventDefault()
    var tbody = document.querySelector('tbody')
    var new_row = tbody.querySelector('tr:last-child').cloneNode(true)

    var v = parseInt(new_row.querySelector('td:first-child').textContent)
    v = v + 1

    new_row.querySelector('td:first-child').textContent = v

    tbody.appendChild(new_row)
  }

  removeRow.onclick = function(ev) {
    ev.preventDefault()
    var tbody = document.querySelector('tbody')
    new_tbody = tbody.cloneNode(true)
    var rows = new_tbody.querySelectorAll('tr')

    if (rows.length) {
      rows[rows.length-1].remove()
    }

    tbody.parentNode.replaceChild(new_tbody, tbody)
  }