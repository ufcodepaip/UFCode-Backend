const mongoose = require('mongoose')

module.exports = function(){
    const schema = mongoose.Schema(
        {
            id_problem: {
                type: mongoose.Schema.ObjectId,
                ref: 'Problem'
            },
            id_course: {
                type: mongoose.Schema.ObjectId,
                ref: 'Course'
            }
        }
    )
    return mongoose.model('ProblemCourse', schema);
}()