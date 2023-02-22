<<<<<<< HEAD
// import npm packages
=======
>>>>>>> 5fbdad54f8f09d0424fd8a8837b0af84010c71a1
import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
<<<<<<< HEAD

// connect to MongoDB with mongoose
import './config/database.js'

// import routes
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
// import {router as clientsRouter } from './routes/clients.js'

// create the express app
const app = express()

// basic middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// mount imported routes
app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
// app.use('/api/clients', clientsRouter)

// handle 404 errors
=======
import formData from 'express-form-data'

import {router as clientsRouter} from './routes/clients.js'

// import { router as profilesRouter } from './routes/profiles.js'
// import { router as authRouter } from './routes/auth.js'
// import { router as questionsRouter } from './routes/questions.js'
// import { router as birdsRouter } from './routes/birds.js'
// import { router as eventsRouter } from './routes/events.js'
// import { router as supplylistRouter } from './routes/supplylists.js'

import './config/database.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/api/clients', clientsRouter)

// app.use('/api/profiles', profilesRouter)
// app.use('/api/auth', authRouter)
// app.use('/api/questions/', questionsRouter)
// app.use('/api/birds', birdsRouter)
// app.use('/api/events', eventsRouter)
// app.use('/api/supplylists', supplylistRouter)

>>>>>>> 5fbdad54f8f09d0424fd8a8837b0af84010c71a1
app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

<<<<<<< HEAD
// handle all other errors
=======
>>>>>>> 5fbdad54f8f09d0424fd8a8837b0af84010c71a1
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
