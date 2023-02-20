import {Client} from '../models/client.js'

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  req.body.owner = req.user.profile
  Client.create(req.body)
  .then(populatedClient => {
    res.json(populatedClient)
  })
  console.log(req, "BE create")
.catch(err => {
  console.log(err)
  res.status(500).json({err: err.errmsg})
})
}

function index(req, res) {
  Client.find({})
  .getPopulatedPaths("owner")
  .then(clients => {res.json(clients)
  })
}

export {
  create,
  index
}
// .then(client => {
//   Client.findById(client._id)
//   populate ("owner")