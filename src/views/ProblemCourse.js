const render = (problemCourse) => {
    return {
        id: problemCourse._id,
        problem: problemCourse.id_problem,
        course: problemCourse.id_course
    }
}

const renderMany = (problemCourses) =>{
    return problemCourses.map((problemCourse) => render(problemCourse))
}

module.exports.render = render
module.exports.renderMany = renderMany 