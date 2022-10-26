const { day } = require("../src/index")
const assert = require("assert")

test("Day", function () {
    assert.equal(getDayName(1900, 0, 1), "pazartesi")
    assert.equal(getDayName(2022, 9, 26), "carsamba")
    assert.equal(getDayName(2022, 9, 27), "persembe")
    assert.equal(getDayName(2022, 9, 28), "cuma")
    assert.equal(getDayName(2022, 9, 23), "pazar")
})