const path = require("path");
const basePath = path.resolve(__dirname, "../../");
const baseConfig = {
    template:'src/index.html',
    basePath,
    devServer:{
        host:'0.0.0.0',
        port:'3000'
    },
    multiples:{
        htmlEntry:path.resolve(basePath,'src/pages/html'),
        jsEntry:path.resolve(basePath,'src/pages/entryjs')
    }
}
let customConfig = {};
try{
    customConfig = require('../../config');
}catch(e){
    // ignore the module can not find error
}
const config = Object.assign({},baseConfig,customConfig);

module.exports = config;