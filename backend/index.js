const express = require('express')
const app = express()



app.get('/', (req, resp) => {
  resp.send('fjaklsdjfasklñ');
})


app.listen(3001)
console.log('API FUNCIONANDO')