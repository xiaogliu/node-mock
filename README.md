# node_mock

Local mock data server based on [egg.js](https://eggjs.org) and [Mock.js](http://mockjs.com/)

## QuickStart

### write your mock data

- In file of `router.js` write your mock api address, like this: 

```js
module.exports = app => {
  const { router, controller } = app;
  // list api
  router.get('/list', controller.list.index);

  // detail api
  router.get('/detail', controller.detail.index);
};
```

- In directory of `controller` wirte your mock data and handle your logic, like this:

```js
const Controller = require('egg').Controller;
// import mock
const Mock = require('mockjs');

class HomeController extends Controller {
  async test() {
    const { ctx } = this;
    // this data is generated by mockjs randomly
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
    });
    ctx.body = data;
  }
}

module.exports = HomeController;
```

That's it!

see [egg docs][egg] and [Mock.js](http://mockjs.com/) for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

You can see api response is changed when you change your mock data after you save it and refresh your browser.

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
