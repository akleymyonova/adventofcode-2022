const { getInput } = require('../helpers/file')

const input = getInput(1);

const dataPerElf = input.split('\n\n').map(data => data.split('\n'));

const caloriesPerElf = dataPerElf.map(data => {
  return data.reduce((acc, cur) => acc + +cur, 0)
})

const sortedCalories = caloriesPerElf.sort((a, b) => b - a);

const maxCalories = sortedCalories[0];

const topMaxCaloriesSum = sortedCalories
  .slice(0,3)
  .reduce((acc, cur) => acc + cur, 0);

console.log(maxCalories, topMaxCaloriesSum)
