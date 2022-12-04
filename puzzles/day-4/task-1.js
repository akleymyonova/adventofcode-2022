const { getInput } = require('../../helpers/file');
const { getIsOneFullyContainAnother } = require('./helpers');

const input = getInput(4);
const pairs = input.split('\n');

const result = pairs
  .map(getIsOneFullyContainAnother)
  .reduce((acc, cur) => !!cur ? acc + 1 : acc, 0);


console.log(result)