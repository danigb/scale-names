'use strict'

var NO_NAMES = []
var nameIndex = {}
var decimalIndex = {}

var Names = {
  all: function () { return Object.keys(decimalIndex) },
  get: function (decimal) { return nameIndex[decimal] || NO_NAMES },
  getDecimal: function (name) { return decimalIndex[name] },
  set: function (decimal, list) {
    nameIndex[decimal] = list
    list.forEach(function (name) { decimalIndex[name] = decimal })
  },
  load: function (dictionary) {
    Object.keys(dictionary).forEach(function (decimal) {
      Names.set(decimal, dictionary[decimal])
    })
  },
  clear: function () {
    nameIndex = {}
    decimalIndex = {}
  }
}

module.exports = Names
