const styles = {
    'bold'          : ['\x1B[1m',  '\x1B[22m'],
    'italic'        : ['\x1B[3m',  '\x1B[23m'],
    'underline'     : ['\x1B[4m',  '\x1B[24m'],
    'inverse'       : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m'], 
}
const colorStyle = {
    'white'         : ['\x1B[37m', '\x1B[39m'],
    'grey'          : ['\x1B[90m', '\x1B[39m'],
    'black'         : ['\x1B[30m', '\x1B[39m'],
    'blue'          : ['\x1B[34m', '\x1B[39m'],
    'cyan'          : ['\x1B[36m', '\x1B[39m'],
    'green'         : ['\x1B[32m', '\x1B[39m'],
    'magenta'       : ['\x1B[35m', '\x1B[39m'],
    'red'           : ['\x1B[31m', '\x1B[39m'],
    'yellow'        : ['\x1B[33m', '\x1B[39m'],
}
const bgStyle = {
    'white'       : ['\x1B[47m', '\x1B[49m'],
    'black'       : ['\x1B[40m', '\x1B[49m'],
    'blue'        : ['\x1B[44m', '\x1B[49m'],
    'cyan'        : ['\x1B[46m', '\x1B[49m'],
    'green'       : ['\x1B[42m', '\x1B[49m'],
    'magenta'     : ['\x1B[45m', '\x1B[49m'],
    'red'         : ['\x1B[41m', '\x1B[49m'],
    'yellow'      : ['\x1B[43m', '\x1B[49m']
}

function Color(){}
const proto = Color.prototype;
for(let key in colorStyle){
    proto[key] = function(str){
        return colorStyle[key].join(str);
    }
}
for(let key in bgStyle){
    proto[key +'BG'] = function(str){
        return bgStyle[key].join(str);
    }
}

module.exports = new Color();