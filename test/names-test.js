var vows = require('vows')
var assert = require('assert')
var build = require('../')

vows.describe('Scale names').addBatch({
  'custom dictionary': {
    'topic': function () {
      return build({ '1': ['A', 'B'], 7: ['C']})
    },
    'get name from number': function (names) {
      assert.deepEqual(names.get(1), ['A', 'B'])
      assert.deepEqual(names.get(7), ['C'])
    },
    'get name from number literal': function (names) {
      assert.deepEqual(names.get('1'), [ 'A', 'B' ])
      assert.deepEqual(names.get('7'), [ 'C' ])
    },
    'get number from name': function (names) {
      assert.equal(names.getNumber('A'), 1)
      assert.equal(names.getNumber('B'), 1)
      assert.equal(names.getNumber('C'), 7)
    },
    'get all names': function (names) {
      assert.deepEqual(names.all(), ['A', 'B', 'C'])
    },
    'not named returns empty array': function (names) {
      assert.deepEqual(names.get('A'), [])
      assert.deepEqual(names.get(2), [])
    }
  },
  'all': function () {
    var all = build(require('../all.json'))
    assert(all.all().length > 100)
    var common = build(require('../common.json'))
    assert(common.all().length < 100)
  }
}).export(module)
