const getSub = (submission) => {
    return {
        id: submission._id,
        codeInput : submission.codeInput,
        result :  submission.result,
        error :  submission.error,
        id_problem :  submission.id_problem,
        id_language :  submission.id_language
    }
}

const getManySubmission = (submission) => {
    return submission.map((submission) => getSub(submission))
}

module.exports = { getSub, getManySubmission }