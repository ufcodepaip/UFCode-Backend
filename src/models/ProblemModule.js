const mongoose = require('mongoose')

module.exports = function(){
    const schema = mongoose.Schema(
        {
            id_problem: {
                type: mongoose.Schema.ObjectId,
                ref: 'Problem'
            },
            id_module: {
                type: mongoose.Schema.ObjectId,
                ref: 'Module'
            }
        }
    )
    return mongoose.model('ProblemModule', schema);
}()