const { isGeatVowel } = require("../src/index")
const assert = require("assert")

test("Greate Vowel", function () {
    assert.equal(isGeatVowel("umut"), true)
    assert.equal(isGeatVowel("a-ı-o-u"), true)
    assert.equal(isGeatVowel("e-i-ö-ü"), true)
    assert.equal(isGeatVowel("Türkiye"), true)
    assert.equal(isGeatVowel("AltmIş"), true)
    assert.equal(isGeatVowel("dokuz"), true)
    assert.equal(isGeatVowel("perşembe"), true)

    assert.equal(isGeatVowel("ali"), false)
    assert.equal(isGeatVowel("pazartesi"), false)
    assert.equal(isGeatVowel("İlham"), false)
})