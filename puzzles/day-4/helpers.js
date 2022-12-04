function splitRanges(pair) {
  return pair
    .split(',')
    .map(range => range.split('-').map(val => +val));
}

function getIsOneFullyContainAnother(pair) {
  const ranges = splitRanges(pair);
  return (
    (ranges[0][0] <= ranges[1][0] && ranges[0][1] >= ranges[1][1]) ||
    (ranges[1][0] <= ranges[0][0] && ranges[1][1] >= ranges[0][1])
  );
}

function getHasIntersection(pair) {
  const ranges = splitRanges(pair);
  return (
    getIsOneFullyContainAnother(pair) ||
    (ranges[0][0] >= ranges[1][0] && ranges[0][0] <= ranges[1][1]) ||
    (ranges[0][1] >= ranges[1][0] && ranges[0][1] <= ranges[1][1])
  )
}

module.exports = {
  getIsOneFullyContainAnother,
  getHasIntersection,
}