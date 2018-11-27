const config = require('../base/merged.config')
const baseConfig = require('../base/webpack.config')

module.exports = Object.assign({},baseConfig,{
    mode:'production'
});