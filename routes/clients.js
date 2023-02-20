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