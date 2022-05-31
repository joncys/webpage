const express = require('express')
const app = express()
const port = 4050

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Webserver listening on port ${port}`)
})
