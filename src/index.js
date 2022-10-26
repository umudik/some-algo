const groupA = ["a", "ı", "o", "u", "A", "I", "O", "Ö"];
const groupE = ["e", "i", "ö", "ü", "E", "İ", "Ö", "Ü"];
const days = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi'];


isGeatVovel = function (text = "") {
    let a = groupA.some(ch => text.includes(ch))
    let b = groupE.some(ch => text.includes(ch))
    return !!(a ^ b)
}

getDayName = function () {
    var date = new Date(...arguments);
    return days[date.getDay()]
}

hasAnomaly = function (tree) {
    const message = "Converting circular structure to JSON"
    try {
        JSON.stringify(tree)
    } catch (error) {
        if (String(error).includes(message)) {
            console.log(tree);
            return true
        }
    }
    return false
}

module.exports = { isGeatVovel, getDayName, hasAnomaly }




