const { hasAnomaly } = require("../src/index.js")
const assert = require("assert")

test("B Deep Anomaly", function () {
    const anomaly1 = {
        l: null,
        r: {
            l: null,
            r: {
                l: null,
                r: null
            }
        }
    }
    anomaly1.r.r.l = anomaly1
    assert.equal(hasAnomaly(anomaly1), true)

})

test("B Anomaly 2", function () {
    const node = {
        l: null,
        r: null
    }
    const anomaly2 = {
        l: node,
        r: node
    }
    assert.equal(hasAnomaly(anomaly2), false)
})

test("B Valid Tree", function () {
    const normal = {
        l: null,
        r: {
            l: null,
            r: {
                l: null,
                r: null
            }
        }
    }
    assert.equal(hasAnomaly(normal), false)
})