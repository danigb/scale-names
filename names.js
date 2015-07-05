'use strict'

var NO_NAMES = []
module.exports = function (dictionary) {
  var names = {}
  var decimals = {}

  var Names = {
    all: function () { return Object.keys(decimals) },
    get: function (decimal) { return names[decimal] || NO_NAMES },
    getNumber: function (name) { return decimals[name] },
    set: function (decimal, list) {
      names[decimal] = list
      list.forEach(function (name) { decimals[name] = decimal })
    }
  }

  Object.keys(dictionary).forEach(function (decimal) {
    Names.set(decimal, dictionary[decimal])
  })
  return Names
}
