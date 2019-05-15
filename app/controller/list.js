'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, list';
  }
}

module.exports = ListController;
