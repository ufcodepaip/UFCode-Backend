const fs = require('fs').promises

async function validateOutput(output, expectedOutput) {
    
    //output = output.split('\r\n')
    //console.log(output[0])
    return output == expectedOutput
}

module.exports = validateOutput
