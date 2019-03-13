let express = require('express')
let logger = require('morgan')


let app = express();

app.get('/', (request, response) => {
    response.send("<h1>My first Express App</h1>");
})

let port = process.env.PORT || 8050

app.listen(port, () => {
    console.log("L'application tourne au port "+ port);
})