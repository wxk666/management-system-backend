'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user/init', controller.user.init);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/management/buy', controller.management.buy);
  router.post('/api/management/fix', controller.management.fix);
  router.post('/api/management/scrapped', controller.management.scrapped);
  router.get('/api/management/list', controller.management.list);
  router.delete('/api/management', controller.management.remove);
  router.get('/api/order/list', controller.order.list);
  router.delete('/api/order', controller.order.remove);
  router.delete('/api/scrapped', controller.scrapped.remove);
  router.get('/api/scrapped/list', controller.scrapped.list);
  router.delete('/api/fix', controller.fix.remove);
  router.get('/api/fix/list', controller.fix.list);
  router.patch('/api/fix', controller.fix.update);
  router.patch('/api/order', controller.order.update);
  router.patch('/api/scrapped', controller.scrapped.update);
};
