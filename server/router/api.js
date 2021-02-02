const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { service1, service2 } = require('../config/services.js');

const router = Router();

router.use(service1.getItemsAPI, createProxyMiddleware({
  target: service1.url,
  changeOrigin: true,
}));

router.use(service1.postItemsAPI, createProxyMiddleware({
  target: service1.url,
  changeOrigin: true,
}));

router.use(service2.productsAPI, createProxyMiddleware({
  target: service2.url,
  changeOrigin: true,
}));

router.use(service2.wishlistAPI, createProxyMiddleware({
  target: service2.url,
  changeOrigin: true,
}));

module.exports = router;
