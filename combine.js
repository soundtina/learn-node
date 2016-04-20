'use strict'
var fs = require('fs');
let finaltxt = '';    
//file a
fs.readFile('a.txt','utf-8',(err,respa) =>{
    if (err) {
        throw err;
    }
    finaltxt = respa; 
    //file b
        fs.readFile('b.txt','utf-8',(err,respb) =>{
            if (err) {
                throw err;
            }
            finaltxt += respb;
            //file c
            fs.readFile('c.txt','utf-8',(err,respc) =>{
                if (err) {
                    throw err;
                }
                finaltxt += respc;
                console.log(finaltxt);
        });
    });
});
