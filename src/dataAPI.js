const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Whatever'
}

const headersPost = {
  'Accept': 'application/json',
  'Authorization': 'Whatever',
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const postPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())

export const getPosts = (id) =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getComments = (parentId) =>
  fetch(`${api}/posts/${parentId}/comments`, { headers })
  .then(res => res.json())
