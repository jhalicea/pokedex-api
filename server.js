const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, my world!')
})

const PORT = 8005

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
