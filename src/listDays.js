const { getDayName } = require("./index.js")
const list = []
for (let year = 1900; year < 2022; year++) {
    for (let month = 0; month < 11; month++) {
        const day = getDayName(year, month, 1)
        if (day === "pazar") {
            list.push({ year, month: month < 9 ? `0${month + 1}` : `${month + 1}` })
        }
    }
}
console.log("Months starting with Sunday")
console.table(list);