const { getInput } = require('../../helpers/file');
const { getStartOfPacketMarkerIndex } = require('./helpers');

const input = getInput(6);

const AMOUNT_OF_UNIQUE = 14;

console.log(getStartOfPacketMarkerIndex(input, AMOUNT_OF_UNIQUE));

