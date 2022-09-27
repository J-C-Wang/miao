var j_c_wang = {
  chunk: function chunk(array, size = 1) {
    var result = []
    var count = array.length / size
    for (var i = 0; i < count; i++) {
      result[i] = array.splice(0, size)
    }
    return result
  },

  compact: function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  concat: function concat(array, ...values) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    for (var j = 0; j < values.length; j++) {
      if (Array.isArray(values[j])) {
        for (var k = 0; k < values[j].length; k++) {
          result.push(values[j][k])
        }
      } else {
        result.push(values[j])
      }
    }
    return result
  },

  fill: function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function drop(array, n = 1) {
    for (var i = 0; i < n; i++) {
      array.shift()
      if (array === []) {
        break
      }
    }
    return array
  },

  findIndex: function findIndex(array, predicate = _.identity, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          return i
        }
      }
      else if (Array.isArray(predicate)) {
        if (predicate[1] === array[i][predicate[0]]) {
          return i
        }
      }
      else if (typeof predicate == 'string') {
          if (array[i][predicate] === true) {
            return i
          }
      }
      else if (typeof predicate == 'object') {
        var judge = 1
        for (var key in predicate) {
          if (array[i][key] != predicate[key]) {
            judge = 0
            break
          }
        }
        if (judge) {
          return i
        }
      }
    }
    return -1
  },

  findLastIndex: function findLastIndex(array, predicate = _.identity, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          return i
        }
      }
      else if (Array.isArray(predicate)) {
        if (predicate[1] === array[i][predicate[0]]) {
          return i
        }
      }
      else if (typeof predicate == 'string') {
          if (array[i][predicate] === true) {
            return i
          }
      }
      else if (typeof predicate == 'object') {
        var judge = 1
        for (var key in predicate) {
          if (array[i][key] != predicate[key]) {
            judge = 0
            break
          }
        }
        if (judge) {
          return i
        }
      }
    }
    return -1
  },

  flatten: function flatten(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      }
      else {
        result.push(array[i])
      }
    }
    return result
  },

  flattenDeep: function flattenDeep(array) {
    var result = []
    function concat(array, ...values) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        result.push(array[i])
      }
      for (var j = 0; j < values.length; j++) {
        if (Array.isArray(values[j])) {
          for (var k = 0; k < values[j].length; k++) {
            result.push(values[j][k])
          }
        } else {
          result.push(values[j])
        }
      }
      return result
    }
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = concat(result,flattenDeep(array[i]))
      }
      else {
        result.push(array[i])
      }
    }
    return result
  },

  flattenDepth: function flattenDepth(array, depth = 1) {
    var result = array
    function flatten(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          for (var j = 0; j < array[i].length; j++) {
            result.push(array[i][j])
          }
        }
        else {
          result.push(array[i])
        }
      }
      return result
    }
    for (var i = 0; i < depth; i++) {
      result = flatten(result)
    }
    return result
  },

  head: function head(array) {
    if (array != []) {
      return array[0]
    }
    else {
      return undefined
    }
  },

  last: function last(array) {
    if (array != []) {
      return array.at(-1)
    }
    else {
      return undefined
    }
  },

  indexOf: function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return undefined
  },

  lastindexOf: function lastindexOf(array, value, fromIndex = array.length-1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return undefined
  },

  initial: function initial(array) {
    if (array == []) {
      return array
    }
    else {
      array.pop()
      return array
    }
  },


  join: function join(array, separator = ',') {
    if (array.length == 1) {
      return array[0]
    }
    var result = ''
    for (var i = 0; i < array.length; i++) {
      result = result + array[i] + separator
    }

    return result.slice(0,-1)
  },

  pull: function pull(array, ...values) {
    var obj = {}
    var result = []
    for (var i = 0; i < array.length; i++) {
      var val = values[i]
      if (!obj[val]) {
        obj[val] = 1
      }
    }
    for (var j = 0; j < array.length; j++) {
      var ary = array[j]
      if (!obj[ary]) {
        result.push(ary)
      }
    }
    return result
  },

  reverse: function reverse(array) {
    var result = []
    for (var i = array.length - 1; i > -1 ; i--) {
      result.push(array[i])
    }
    array = result
    return array
  },

  identity: function identity(value) {
    return value
  },

  every: function every(collection, predicate) {

    for (var i = 0; i < collection.length; i++) {
      if (!find(predicate,i,collection[i])) {
        return false
      }
    }
    return true
  },

  some: function some(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
      if (find(predicate,i,collection[i])) {
        return true
      }
    }
    return false
  },

  countBy: function countBy(collection, iteratee) {
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      if (typeof iteratee == 'string') {
        var col = collection[i][iteratee]
      } else {
        var col = iteratee(collection[i])
      }
      if (!map[col]) {
        map[col] = 0
      }
      map[col]++
    }
    return map
  },

  difference: function difference(array, ...values) {
    var result = []
    var val = flatten(values)
    for (var i = 0; i < array.length; i++) {
      if (!val.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  },

  differenceBy: function differenceBy(array, ...values) {
    if (values.length === 1) {
      return this.difference(array,...values)
    } else if (values.length > 1) {
      if (Array.isArray(values.at(-1))) {
        return this.difference(array, ...values)
      } else {
        var lastary = values.pop()
        var val = flatten(...values)
        if (typeof lastary === "string") {
          var operatedAry = array.map(it => it[lastary])
          var operatedVal = val.map(it => it[lastary])
        } else if (typeof lastary === "function") {
          var operatedAry = array.map(it => lastary(it))
          var operatedVal = val.map(it => lastary(it))
        }
        for (var i = 0; i < array.length; i++) {
          var judge = 1
          for (var j = 0; j < val.length; j++) {
            if (operatedAry[i] == operatedVal[j]) {
              judge = 0
            }
          }
          if (judge) {
            result.push(array[i])
          }
        }

        return result

      }
    }
  },

  groupBy: function groupBy(collection, iteratee) {
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      if (typeof iteratee == 'string') {
        var col = collection[i][iteratee]
      } else {
        var col = iteratee(collection[i])
      }
      if (!map[col]) {
        map[col] = [collection[i]]
      }
      else {
        map[col].push(collection[i])
      }
    }
    return map
  },

  dropRight: function dropRight(array, n = 1) {
    var len = array.length - n
    for (var i = array.length - 1; i >= len; i--) {
      array.pop()
    }
    return array
  },

  dropRightWhile: function dropRightWhile(array, predicate) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          array.pop()
        } else {
          break
        }
      }
      else if (Array.isArray(predicate)) {
        if (predicate[1] === array[i][predicate[0]]) {
          array.pop()
        } else {
          break
        }
      }
      else if (typeof predicate == 'string') {
        if (array[i][predicate] === true) {
          array.pop()
        } else {
          break
        }
      }
      else if (typeof predicate == 'object') {
        var judge = 1
        for (var key in predicate) {
          if (array[i][key] != predicate[key]) {
            judge = 0
            break
          }
        }
        if (judge) {
          array.pop()
        }
      }
    }
    return array
  },

  dropWhile: function dropWhile(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          array.shift()
        } else {
          break
        }
      }
      else if (Array.isArray(predicate)) {
        if (predicate[1] === array[i][predicate[0]]) {
          array.shift()
        } else {
          break
        }
      }
      else if (typeof predicate == 'string') {
        if (array[i][predicate] === true) {
          array.shift()
        } else {
          break
        }
      }
      else if (typeof predicate == 'object') {
        var judge = 1
        for (var key in predicate) {
          if (array[i][key] != predicate[key]) {
            judge = 0
            break
          }
        }
        if (judge) {
          array.shift()
        } else {
          break
        }
      }
    }
    return array
  },

  fromPairs: function fromPairs(pairs) {
    var obj = {}
    for (var i = 0; i < pairs.length; i++) {
      let ary = pairs[i]
      obj[ary[0]] = ary[1]
    }
    return obj
  },

  isEqual: function isEqual(value, other) {
    return value === other
  },

  differenceWith: function differenceWith(array, ...values) {
    if (values.length === 1) {
      return this.difference(array, ...values)
    } else if (values.length > 1) {
      if (Array.isArray(values.at(-1))) {
        return this.difference(array, ...values)
      } else {
        var ary = []
        var val = values.pop()
        for (var i = 0; i < array.length; i++) {
          for (var j = 0; j < values.length; j++) {
            if (val[0](array[i], values[j])) {
              ary.push(array[i])
            }
          }
        }
        return ary
      }
    }
  },


}
function find(value,i,item) {
  if (typeof value == 'function') {
    if (value(item)) {
      return true
    }
  }
  else if (Array.isArray(value)) {
    if (value[1] === item[value[0]]) {
      return true
    }
  }
  else if (typeof value == 'string') {
      if (item[value] === true) {
        return true
      }
  }
  else if (typeof value == 'object') {
    var judge = 1
    for (var key in value) {
      if (item[key] != value[key]) {
        judge = 0
        break
      }
    }
    if (judge) {
      return true
    }
  }
}

function flatten(array) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        result.push(array[i][j])
      }
    }
    else {
      result.push(array[i])
    }
  }
  return result
}
