const groupA = ["a", "ı", "o", "u", "A", "I", "O", "Ö"];
const groupE = ["e", "i", "ö", "ü", "E", "İ", "Ö", "Ü"];
const days = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi'];


isGeatVowel = function (text = "") {
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
            return true
        }
    }
    return false
}

getAnomaly = function (tree) {
    const path = []
    try {
        const res = JSON.stringify(tree)
    } catch (error) {
        const findR = new RegExp("'r'", 'gi');
        const findL = new RegExp("'l'", 'gi');
        const results = []

        while (findR.exec(String(error))) {
            results.push({ index: findR.lastIndex, letter: "r" });
        }

        while (findL.exec(String(error))) {
            results.push({ index: findL.lastIndex, letter: "l" });
        }
        const sortedArray = results.sort(function (a, b) {
            a.index - b.index
        })

        const letters = sortedArray.map(i => i.letter)
        let obj = Object.create(tree)
        for (let o of letters) {
            obj = obj[o]
        }
        return obj
    }


    return false

};


module.exports = { isGeatVowel, getDayName, hasAnomaly, getAnomaly }




