function areUniqueCharacters(str) {
  return new Set(str).size == str.length;
}

function getStartOfPacketMarkerIndex(datastream, distinctChars) {
  for(let index = distinctChars; index < datastream.length; index++) {
    const substr = datastream.slice(index - distinctChars, index);
    if (areUniqueCharacters(substr)) return index;
  }

  return -1;
}

module.exports = {
  areUniqueCharacters,
  getStartOfPacketMarkerIndex,
}