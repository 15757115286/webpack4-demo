const fs = require('fs');
const path = require('path');
function scan(entryPath,graph = {},root = '',alias = ''){
    try{
        const finalPath = path.resolve(root,entryPath);
        const files = fs.readdirSync(finalPath);
        for(let i = 0,len = files.length;i<len;i++){
            let filePath = files[i];
            let filePathNoExtension = filePath.replace(/\.[^\.]*$/,'')
            let finalAlias = alias;
            if(alias !== ''){
                finalAlias = finalAlias + '.' + filePathNoExtension
            }else{
                finalAlias = filePathNoExtension
            }
            scan(filePath,graph,finalPath,finalAlias)
        }
    }catch(e){
        if(root !== ''){
            graph[alias] = {
                fileName:entryPath,
                root
            }
        }
    }
    return graph;
}
/* const s = scan(path.resolve(__dirname,'../../src/pages/html'))
console.log(s) */
exports.scan = scan;