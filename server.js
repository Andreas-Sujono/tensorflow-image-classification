const express = require('express')

const app = express()
const port = 3000

app.use(express.static('./static'))

app.listen(port, () => console.log(`Express app listening at http://localhost:${port}`))
