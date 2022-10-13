const {Pool,} = require ('pg');

  const poolUserService = new Pool ({
    host:'localhost',
    port:5432,
    user:'nico',
    password:'admin123',
    database:'my_store',
  });

module.exports = poolUserService;

