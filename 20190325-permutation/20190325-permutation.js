const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift();


function permutate(word) {
  if (word.length === 1) {
    return [word];
  }

  let permutations = [];
  let small_perms = permutate(word.slice(1));
  let first_letter = word[0];

  for (let i = 0; i < small_perms.length; i += 1) {
    let small_perm = small_perms[i];

    for (let j = 0; j <= small_perm.length; j += 1) {
      let prefix = small_perm.slice(0, j);
      let suffix = small_perm.slice(j);
      permutations.push(prefix.concat([first_letter], suffix));
    }
  }

  return permutations;
}

(() => {
	const word = input();
  const permutations = permutate(word);
  permutations.map(i => console.log(i));
})();
