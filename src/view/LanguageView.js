const getLang = (language) => {
    return {
        id:language._id,
        name: language.name
    }
}

const getManyLang = (languages) => {
    return  languages.map((language) => getLang(language))
}

module.exports = {getLang,getManyLang}