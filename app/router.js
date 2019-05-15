'use strict';

/**
 * only need one router file
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/list', controller.list.index);
  router.get('/detail', controller.detail.index);
};
