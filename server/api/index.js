import { Router } from 'express'

import users from './users'
import hotels from './hotels'

const router = Router()

// Add USERS Routes
router.use(users)

//Add HOTELS Routes
router.use(hotels)

export default router
