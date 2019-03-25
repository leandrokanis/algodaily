// Problem of the day: Generate All String Permutations
// Write an algorithm that takes an input string like abc, and prints out all possible permutations of the string.
//
// const str = "abc"
// permutations(str)
// // abc
// // acb
// // bac
// // bca
// // cba
// // cab
//
const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift();

const permutation = (word) => {
  console.log(word);

  for(let i in word){
    i = parseInt(i);
    console.log( word[i] + word[i+1] );
  }

  return;
};


(() => {

	const word = input();
  permutation(word);

})();
