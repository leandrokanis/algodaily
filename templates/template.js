const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift();


const permutation = (word) => {
  console.log(word);
  return;
};

(() => {

	const word = input();
  permutation(word);

})();
