const { day } = require("../src/index")
const assert = require("assert")

test("Day", function () {
    assert.equal(day(1900, 0, 1), "pazartesi")
    assert.equal(day(2022, 9, 26), "carsamba")
    assert.equal(day(2022, 9, 27), "persembe")
    assert.equal(day(2022, 9, 28), "cuma")
    assert.equal(day(2022, 9, 23), "pazar")
})