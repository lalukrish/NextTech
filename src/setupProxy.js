// In setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://nexttech.onrender.com', // Replace with your actual API domain
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying.:', req.method, req.url);
      },
    })
  );
};
