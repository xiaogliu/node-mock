'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // direct call class static method in router
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test() {
    const { ctx } = this;
    ctx.body = 'hi, test';
  }
}

module.exports = HomeController;
