const { createProxyMiddleware } = require('http-proxy-middleware');
    
module.exports = function(app) {

    app.use(
    '/appointments', //this is your api
    createProxyMiddleware({
      target:'https://acuityscheduling.com/api/v1/appointments', //this is your whole endpoint link
      changeOrigin: true,
    })
  );
  
};