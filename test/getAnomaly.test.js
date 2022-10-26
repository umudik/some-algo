const assert = require("assert")
const { getAnomaly } = require("../src/index.js")
test("Get Tree Anomaly Tree", function () {
    const anomaly = {
        l: 1,
        r: {
            l: 1,
            r: {
                l: null,
                r: 1
            }
        }
    }
    anomaly.r.r.l = anomaly

    assert.equal(getAnomaly(anomaly), anomaly)
    assert.equal(getAnomaly(anomaly), anomaly.r.r.l)
    assert.notEqual(getAnomaly(anomaly), anomaly.r.r)

});
