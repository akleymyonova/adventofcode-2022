const { getInput } = require('../../helpers/file');
const { getRucksackPriority } = require('./helpers');

const input = getInput(3);

const rucksackItems = input.split('\n');
const priorities = rucksackItems.map(getRucksackPriority);

const result = priorities.reduce((acc, cur) => acc + cur, 0);

console.log(result)