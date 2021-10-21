const fs = require('fs').promises

async function validateOutput(output, expectedOutput) {
    
    //output = output.split('\r\n')
    console.log(output[0])
    return output[0] == expectedOutput
}

module.exports = validateOutput
