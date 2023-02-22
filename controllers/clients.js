// import { Client } from "../models/clients";

// function create(req, res) {
//   req.body.owner = req.user.profile
//   Client.create(req.body)
//   .then(client => {
//     Client.findById(client._id)
//     .populate('owner')
//     .then(populatedClient => {
//       res.json(populatedClient)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.status(500).json({err: err.errmsg})
//   })
// }

// export {
//   create
// }