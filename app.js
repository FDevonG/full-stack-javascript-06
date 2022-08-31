const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandler = require('./errorHandler');

app.set('view engine', 'pug');
//assign our public folder to express.static
app.use('/static', express.static('public'));

//Check our routes file fo a route
app.use(routes);

//run the error handlers if no route is found
app.use(errorHandler.errorFourOhFour);
app.use(errorHandler.golbalError);

app.listen(3000);