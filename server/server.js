import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import requests from './Requests/routes.js'

// import swaggerUI from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc'

// import auth from "./authentication/auth.js"

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

app.use('/api/requests', requests)

app.get('/', (req, res) => {
  res.send('Hello from homepage')
})
