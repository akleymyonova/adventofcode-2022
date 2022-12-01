const fs = require('fs');
const path = require('path')

module.exports = {
  getInput(dayNumber) { 
    const buffer = fs.readFileSync(path.join('inputs', `day-${dayNumber}.txt`));
    const input = buffer.toString();

    return input;
  }
}