const express = require('express')

const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const seriesRouter= require('./series.router');
const usersRouter = require('./users.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);

    router.use('/products', productRouter)
    router.use('/categories',categoriesRouter)
    router.use('/categories',seriesRouter);
    router.use('/users',usersRouter);
}

module.exports = routerApi;
