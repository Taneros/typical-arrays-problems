
exports.min = function min(array) {

  if (!array || array.length === 0) return 0

  let min = Math.min(...array)

  return 'minimum', min;
}

exports.max = function max(array) {

  if (!array || array.length === 0) return 0

  let max = Math.max(...array)

  return 'maximum', max;
}

exports.avg = function avg(array) {

  if (!array || array.length === 0) return 0

  let avg = array.reduce((acc, el) => acc + el) / array.length

  return 'average', avg;
}