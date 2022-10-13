

const poolUserService= require('../libs/postgres');
const {models} = require ('../libs/sequelize');

class UserService {
  constructor() {
    this.poolUserService=poolUserService;
    this.poolUserService.on('error', (err) => console.log(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const rta = await this.poolUserService.query(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
