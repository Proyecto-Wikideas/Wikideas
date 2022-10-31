export default (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}