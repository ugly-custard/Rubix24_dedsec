import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// import swaggerUI from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc'

import auth from "./authentication/auth.js"
import ngo from "./Ngo/routes.js"
import user from "./User/routes.js"
import request from "./Request/routes.js"

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

app.use('/api/auth', auth)
app.use('/api/ngo', ngo)
app.use('/api/user', user)
app.use('/api/request', request)


app.get('/', (req, res) => {
  res.send('Hello from homepage')
})

