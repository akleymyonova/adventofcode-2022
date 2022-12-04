const { getInput } = require('../../helpers/file');
const { splitByEveryNLines, getPriorityByItemType, getIntersection } = require('./helpers');

const input = getInput(3);
const groups = splitByEveryNLines(input, 3);

const intersections = groups.map(group => { return getIntersection(...group);});
const priorities = intersections.map(getPriorityByItemType);

const result = priorities.reduce((acc, cur) => acc + cur, 0);
console.log(result)

