const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
//setings 
app.set('port',process.env.PORT || 9000);

//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());

//routers
require('./routes/userRouters')(app);
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });