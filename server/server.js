import express from 'express'
import morgan from 'morgan'

// import swaggerUI from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc'

import auth from "./authentication/auth.js"
import cors from 'cors'

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

app.get('/', (req, res) => {
  res.send('Hello from homepage')
})

