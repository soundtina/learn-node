'use strict'
var fs = require('fs');
let finaltxt = '';    


function getFileContent(filePath) {
  return  new Promise((resolve, reject) => {
        fs.readFile(filePath,(err,resp) => {
            if (err) {
                reject(err);
            }
            resolve(+resp);
        });
    });
}

let fillContent = '';

function combineStr(str) {
    fillContent += str;
}

function resoveError(error) {
    console.error(error);
}
// getFileContent('a.txt').then((data) => {
//         combineStr(data);
//         return getFileContent('b.txt');
// },resoveError)
// .then((data) => {
//     combineStr(data);
// },resoveError);




module.exports = Promise.all([getFileContent('a.txt'),getFileContent('b.txt'),getFileContent('c.txt')])




 