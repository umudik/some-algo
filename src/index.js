const lodash = require("lodash")
const groupA = ["a", "ı", "o", "u", "A", "I", "O", "Ö"];
const groupE = ["e", "i", "ö", "ü", "E", "İ", "Ö", "Ü"];
const days = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi'];


isGeatVovel = function (text) {
    let inc = lodash.includes
    let some = lodash.some
    let a = some(groupA, ch => inc(text, ch))
    let b = some(groupE, ch => inc(text, ch))
    return !!(a ^ b)
}

day = function () {
    var date = new Date(...arguments);
    return days[date.getDay()]
}

hasAnomaly = function (tree) {
    const message = "Converting circular structure to JSON"
    try {
        JSON.stringify(tree)
    } catch (error) {
        if (String(error).includes(message)) {
            return true
        }
    }
    return false
}



module.exports = { isGeatVovel, day, hasAnomaly }

