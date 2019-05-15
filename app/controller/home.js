'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');

class HomeController extends Controller {
  // direct call class static method in router
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>hi, egg.js</h1>';
  }
  async test() {
    const { ctx } = this;
    // this data is mockjs randomly generated
    const data = Mock.mock({
      categoryName: '@cname',
      'categoryId|+1': 10,
      logo: '@image(64x64,#eee,Logo)',
      'categoryItems|1-4': [{
        cname: '@cname',
        'cid|+1': 100,
        'item|3-7': [{
          name: '@cname',
          'id|+1': 0,
          link: '@url',
        }],
      }],
      'seller|8-15': [{
        name: '@cname',
        url: '@url',
      }],
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
