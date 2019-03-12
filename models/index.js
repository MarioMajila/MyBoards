let express = require('express')

let app = express();

app.get('/', (request, response) => {
    response.send("<h1>My first Express App</h1>");
})

let port = process.env.PORT || 8088

app.listen(port, () => {
    console.log("L'application tourne au port "+ port);
})