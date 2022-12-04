const START_UPPERCASE_CHARCODE = 64;
const EXTRA_LOWERCASE_PRIORITY = 26;

function checkIfUpperCase(value) {
  return value === value.toUpperCase();
}

function getPriorityByItemType(type) {
  const isUpperCase = checkIfUpperCase(type);
  const defaultPriority = type.toUpperCase().charCodeAt(0) - START_UPPERCASE_CHARCODE;
  return isUpperCase ? defaultPriority + EXTRA_LOWERCASE_PRIORITY : defaultPriority;
}

function getIntersection(...items) {
  const [ intersection ] = items.reduce((accSet, cur) => {
    if (!accSet.size) {
      accSet = new Set(cur);
      return accSet;
    }

    return new Set([...new Set(cur)].filter(val => accSet.has(val)));
  }, new Set([]));
  return intersection;
}

function getRucksackPriority(item) {
  const centerIndex = item.length / 2;
  const firstPart = item.slice(0, centerIndex);
  const secondPart = item.slice(centerIndex, item.length);

  const intersection = getIntersection(firstPart, secondPart);
  return getPriorityByItemType(intersection);
}

function splitByEveryNLines(arr, n) {
  const groups = arr.split(/^/m).reduce((acc, cur, index) => {
    index % n ? acc[acc.length - 1] += cur : acc.push(cur);
    return acc;
  }, []);
  return groups.map(group => group.split('\n').filter(val => !!val));
}

module.exports = {
  getPriorityByItemType,
  getRucksackPriority,
  splitByEveryNLines,
  getIntersection,
}