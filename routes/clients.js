<<<<<<< HEAD
// import { Router } from 'express'
// import * as clientsCtrl from '../controllers/clients.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
// const router = Router()

// /*---------- Public Routes ----------*/
// router.post('/', checkAuth, clientsCtrl.create)
// /*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)

// export {
//   router
// }
=======
import { Router } from 'express'
import * as clientCtrl from '../controllers/clients.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.post('/', clientCtrl.create)
// router.get("/", clientCtrl.index)
/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post("/", checkAuth, clientCtrl.create)

export {
  router
}
>>>>>>> 5fbdad54f8f09d0424fd8a8837b0af84010c71a1
