'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, detail';
  }
}

module.exports = DetailController;
