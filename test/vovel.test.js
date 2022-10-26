const { isGeatVovel } = require("../src/index")
const assert = require("assert")

test("Greate Vovel", function () {
    assert.equal(isGeatVovel("umut"), true)
    assert.equal(isGeatVovel("a-ı-o-u"), true)
    assert.equal(isGeatVovel("e-i-ö-ü"), true)
    assert.equal(isGeatVovel("Türkiye"), true)
    assert.equal(isGeatVovel("AltmIş"), true)
    assert.equal(isGeatVovel("dokuz"), true)
    assert.equal(isGeatVovel("perşembe"), true)

    assert.equal(isGeatVovel("ali"), false)
    assert.equal(isGeatVovel("pazartesi"), false)
    assert.equal(isGeatVovel("İlham"), false)
})