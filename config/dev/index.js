const webpack = require('webpack');
const path = require('path');
const color = require('../utils/color')
const fsExtra = require('fs-extra');
const webpackOption = require('./webpack.config.dev');
const assetsPath = path.resolve(__dirname,'../../src/assets');
const destinationPath = path.resolve(__dirname,'../../dist/assets')
webpack(webpackOption,(err, states)=>{
    if(err || states.hasErrors()){
        console.error(err || states.toString({colors:true}));
        return;
    }
    console.log(states.toString({colors:true}))
    console.log(color.blue('\nstart copy static folder to dist folder'))
    fsExtra.copy(assetsPath,destinationPath).then(()=>{
        console.log(color.green('copy successful!\nall resource is build to the root dist folder!'));
    }).catch(err=>{
        console.error(err)
    })
})