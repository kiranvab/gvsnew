const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/search/all', createProxyMiddleware({ target: 'https://veheal-prod.herokuapp.com/gvs/api', changeOrigin: true }));
    app.use('/units/L079', createProxyMiddleware({ target: 'https://veheal-prod.herokuapp.com/gvs/api', changeOrigin: true }));
    app.use('/search/', createProxyMiddleware({ target: 'https://veheal-prod.herokuapp.com/gvs/api', changeOrigin: true }));
    app.use('/units/', createProxyMiddleware({ target: 'https://veheal-prod.herokuapp.com/gvs/api', changeOrigin: true }));
};
