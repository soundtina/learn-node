'use strict'

function* gen(){
    let status = true;
    while(true){
        status = !status;
        yield status ? '开门': '关门'
    }
}

module.exports = gen;