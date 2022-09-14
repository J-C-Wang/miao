var j_c_wang = {
  chunk: function (array, size = 1) {
    var result = []
    var count = array.length / size
    for (var i = 0; i < count; i++) {
      result[i] = array.splice(0, size)
    }
    return result
  },

  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  concat: function (array, ...values) {
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

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n = 1) {
    for (var i = 0; i < n; i++) {
      array.shift()
      if (array === []) {
        break
      }
    }
    return array
  },

  findIndex: function (array, predicate = _.identity, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          return i
        }
      }
      else {
        for (var key in predicate) {
          if (key in array[i]) {
            return i + 1
          }
        }
      }
      return -1
    },

  }
}
