var j_c_wang = {
  chunk: function (array, size) {
    var result = []
    var count = array.length / size
    for (var i = 0; i < count;i++) {
      result[i] = array.splice(0, size)
    }
    return result
  }


}
