const proxy = [{
    context: '/api',
    target: 'http://200.152.101.74:8686/api/',
    pathRewrite: { '^/api': '' }
}];
module.exports = proxy;