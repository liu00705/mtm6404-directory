function list(clientsArr) {
  const htmlArr = clientsArr.map((client) => {
    return `
<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance.toFixed(2)}</strong>
</li>
`
  })

  return htmlArr.join('')
}

function order(clientsArr, property) {

  return clientsArr.sort((a, b) => {
    if (property === 'name') {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    }

    return a[property] - b[property]
  })
}

function total(clientsArr) {
  return clientsArr.reduce((sum, client) => {
    return sum + client.balance
  }, 0)
}

function info(indexNum) {
  return clients.find((client) => {
    return client.index === indexNum
  })
}

function search(queryStr) {
  const q = queryStr.toLowerCase()

  return clients.filter((client) => {
    return client.name.toLowerCase().includes(q)
  })
}