const { getInput } = require('../../helpers/file');

const EMPTY_VALUE = '0';

function rotateMatrix(matrix) {
  const rotated = [];
  matrix.forEach((row, i) => {
    row.forEach((item, j) => {
      if (!rotated[j]) rotated.push([item]);
      else rotated[j].push(item);
    })
  })
  return rotated;
}

function parseStacks(rawStacks) {
  const itemByLines = rawStacks
    .split('\n')
    .map(line => line.replaceAll('    ', ` ${EMPTY_VALUE}`).split(' '))
    .slice(0, 8)
    .reverse();
  const rotatedMatrix = rotateMatrix(itemByLines);
  return rotatedMatrix
    .map(stack => stack
      .map(val => val === EMPTY_VALUE ? null : val[1])
      .filter(val => !!val)
    )
}

function parseCommands(rawCommands) {
  return rawCommands
    .split('\n')
    .map(line => ([...line.matchAll(/\d+/gm)].map(val => +val[0])))
}

const input = getInput(5);
const [stacks, commands] = input.split('\n\n')

let parsedStacks = parseStacks(stacks);
const parsedCommands = parseCommands(commands);

parsedCommands.forEach(command => {
  const stack = parsedStacks[command[1] - 1];
  const moved = stack.splice(stack.length - command[0], command[0]);
  parsedStacks[command[2] - 1].push(...moved); // or just moved.reverse() for the task 2 :)
})

console.log(parsedStacks);
