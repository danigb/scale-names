var vows = require('vows')
var assert = require('assert')
var Names = require('../')
Names.load({ '1': ['A', 'B'], 7: ['C']})

vows.describe('Scale Names').addBatch({
  'get name from decimal': function () {
    assert.deepEqual(Names.get(1), ['A', 'B'])
    assert.deepEqual(Names.get(7), ['C'])
  },
  'get name from decimal literal': function () {
    assert.deepEqual(Names.get('1'), [ 'A', 'B' ])
    assert.deepEqual(Names.get('7'), [ 'C' ])
  },
  'get decimal from name': function () {
    assert.equal(Names.getDecimal('A'), 1)
    assert.equal(Names.getDecimal('B'), 1)
    assert.equal(Names.getDecimal('C'), 7)
  },
  'get all Names': function () {
    assert.deepEqual(Names.all(), ['A', 'B', 'C'])
  },
  'not named returns empty array': function () {
    assert.deepEqual(Names.get('A'), [])
    assert.deepEqual(Names.get(2), [])
  },
  'all': function () {
    Names.clear()
    Names.load(require('../all.json'))
    assert(Names.all().length > 100)
    Names.clear()
    Names.load(require('../common.json'))
    assert(Names.all().length < 100)
  }
}).export(module)
