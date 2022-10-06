const express = require('express');
const routerApi= require('./routes');
const cors = require('cors');
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handle');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localHost:8080', 'https://myapp.com'];
const options = {
  origin:(origin,callback)=> {
    if (whiteList.includes(origin) || !origin ) {
      callback(null,true)
    }else {
      callback(new Error('not allowed'))
    }
  }
}
app.use(cors(options))

app.get('/', (req, res)=> {
  res.send('jola mi server con express');

});
app.get('/nueva-ruta', (req, res)=> {
  res.send('hola nueva-ruta');

});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('mi port', port);
})
