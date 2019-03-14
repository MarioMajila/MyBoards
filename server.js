let express = require('express')
let logger = require('morgan')
let path = require('path')

let app = express();

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/public/views'));

app.get('/', (request, response) => {
    response.render('home.ejs');
})

let port = process.env.PORT || 8050

app.listen(port, () => {
    console.log("L'application tourne au port "+ port);
})