export function list(req, res) {
  let { sort } = req.query
  sort = sort ? sort.toLowerCase() : 'desc'
  if (!(sort === 'asc' || sort === 'desc')) {
    return res.status(400).send('Invalid sort params')
  }
  console.log({ sort })
  res.json([])
}

export function create(req, res) {
  const { title, body } = req.body
  if (title === undefined || body === undefined) {
    return res.status(400).send('Missing title or body')
  }
  console.log(`${title} and ${body} received`)
  res.send('ok')
}

export function read(req, res) {
  const { id } = req.params
  res.json({ id, title: 'a sample title', body: 'this is my note' })
}

export function update(req, res) {
  const { id } = req.params
  if (title === undefined && body === undefined) {
    return res.status(400).send('Missing title or body')
  }
  const { title, body } = req.body
  console.log(`updating ${id} with ${title} and ${body}`)
  res.send('ok')
}

export function deleteNotes(req, res) {
  const { id } = req.params
  console.log(`deleting ${id}`)
  res.send('ok')
}
