module.exports = {
  service1: {
    getItemsAPI: '/items',
    postItemsAPI: '/items/:styleName',
    url: 'http://ec2-52-53-215-61.us-west-1.compute.amazonaws.com:3001',
    bundle: 'bundle.js',
  },
  service2: {
    productsAPI: '/products/:productId',
    wishlistAPI: '/wishlist/:productId',
    url: 'http://ec2-3-101-140-254.us-west-1.compute.amazonaws.com:3002',
    bundle: 'bundle.js',
  },
  service3: {
    API: '/productreviews',
    url: 'http://54.187.133.21:3003',
    bundle: 'bundle.js',
  },
};
