const min = function min(array) {

  if (!array || array.length === 0) {
    console.log('array is undefined or empty')
    return 0
  }

  let min = Math.min(...array)

  return 'minimum', min;
}

const max = function max(array) {

  if (!array || array.length === 0) return 0

  let max = Math.max(...array)

  return 'maximum', max;
}

const avg = function avg(array) {

  if (!array || array.length === 0) return 0

  let avg = array.reduce((acc, el) => acc + el) / array.length

  return 'average', avg;
}

console.log(min([]))



// console.log(min([2, -24, 13, -11, 16, -12, -16, 24, 13, -38, 19, -16, 19, 3, 2, 32, 0, -10, -19, -27]))
// console.log(max([2, -24, 13, -11, 16, -12, -16, 24, 13, -38, 19, -16, 19, 3, 2, 32, 0, -10, -19, -27]))
// console.log(avg([2, -24, 13, -11, 16, -12, -16, 24, 13, -38, 19, -16, 19, 3, 2, 32, 0, -10, -19, -27]))



