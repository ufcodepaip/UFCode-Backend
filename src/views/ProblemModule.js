const render = (problemModule) => {
    return {
        id: problemModule._id,
        problem: problemModule.id_problem,
        module: problemModule.id_module
    }
}

const renderMany = (problemModules) =>{
    return problemModules.map((problemModule) => render(problemModule))
}

module.exports.render = render
module.exports.renderMany = renderMany 