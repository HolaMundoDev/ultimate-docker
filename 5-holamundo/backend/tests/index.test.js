const { describe, it } = require('node:test')
const assert = require('node:assert/strict')

describe('Prueba de tests', () => {
    it('prueba de endpoint', () => {
        assert.equal(2 + 2, 4, "No son iguales")
    })

    it('prueba de otro endpoint', () => {
        assert.equal(3 - 4, -1, "No son iguales")
    })
})

describe('Prueba de otros tests', () => {
    it('prueba de unitaria', () => {
        assert.equal(2 + 2, 4, "No son iguales")
    })

    it('prueba de otra cosa', () => {
        assert.equal(3 - 4, -1, "No son iguales")
    })
})