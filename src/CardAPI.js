const api = "/api"


const headers = {
  'Accept': 'application/json',
}

export const get = (cardId) =>
  fetch(`${api}/cards/${cardId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/cards`, { headers })
    .then(res => res.json())