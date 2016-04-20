'use strict'

var _ = require('lodash');
var addFilecontent = require('./combine-prome');
var putElep = require('./putElephant');


addFilecontent.then((nums) => {
    console.log(' ===================  1  =====================');
    console.log('    Total count in a/b/c file is: ' + _.sum(nums));
}).then(() => {
    

    console.log(' ===================  2  =====================');
    var allSteps = putElep();
    var nextStep = allSteps.next();

    do {
        console.log('    ' + nextStep.value);
        nextStep = allSteps.next();
    } while (!nextStep.done)

})






