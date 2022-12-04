const { getInput } = require('../../helpers/file')

const OPPONENT_CHOISE = {
  ROCK: 'A',
  PAPER: 'B',
  SCISSORS: 'C'
}

const OUTCOME = {
  LOSE: 'X',
  DRAW: 'Y',
  WIN: 'Z'
}

const MY_CHOISE = {
  ROCK: 'X',
  PAPER: 'Y',
  SCISSORS: 'Z'
}

function getOutcomeScore(opChoise, myChoise) {
  switch(opChoise) {
    case OPPONENT_CHOISE.ROCK:
      return myChoise === MY_CHOISE.ROCK ? 3 : (myChoise === MY_CHOISE.PAPER ? 6 : 0);
    case OPPONENT_CHOISE.PAPER:
      return myChoise === MY_CHOISE.PAPER ? 3 : (myChoise === MY_CHOISE.SCISSORS ? 6 : 0);
    case OPPONENT_CHOISE.SCISSORS:
      return myChoise === MY_CHOISE.SCISSORS ? 3 : (myChoise === MY_CHOISE.ROCK ? 6 : 0);
  }
}

function getScoreByShape(myChoise) {
  switch(myChoise) {
    case MY_CHOISE.ROCK: return 1;
    case MY_CHOISE.PAPER: return 2;
    case MY_CHOISE.SCISSORS: return 3;
  }
}

function getMyChoise(opponentChoise, outcome) {
  switch(opponentChoise) {
    case OPPONENT_CHOISE.ROCK:
      return outcome === OUTCOME.DRAW ? MY_CHOISE.ROCK : (outcome === OUTCOME.WIN ? MY_CHOISE.PAPER : MY_CHOISE.SCISSORS);
    case OPPONENT_CHOISE.PAPER:
      return outcome === OUTCOME.DRAW ? MY_CHOISE.PAPER : (outcome === OUTCOME.WIN ? MY_CHOISE.SCISSORS : MY_CHOISE.ROCK);
    case OPPONENT_CHOISE.SCISSORS:
      return outcome === OUTCOME.DRAW ? MY_CHOISE.SCISSORS : (outcome === OUTCOME.WIN ? MY_CHOISE.ROCK : MY_CHOISE.PAPER);
  }
}

function getScore(round) {
  const [opponentChoise, outcome] = round.split(' ');

  const myChoise = getMyChoise(opponentChoise, outcome);

  return getOutcomeScore(opponentChoise, myChoise) + getScoreByShape(myChoise);
}

const input = getInput(2);

const rounds = input.split('\n');
const score = rounds.reduce((acc, cur) => acc + getScore(cur), 0);

console.log(score)