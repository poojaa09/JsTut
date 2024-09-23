
const name="abc"
const repo=50
//console.log(name + repo + " stars") <- old method
console.log(`hello my name is ${name} and my repo count is ${repo}`);
// another method of declaring string
const game=new String("abc-xyz")
console.log(game);
console.log(game[1]);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('x'));
const newgame=game.substring(0,4) // cannot give ive values
console.log(newgame)
const game2=game.slice(0,4) //can give -ve values in order to print in reverse order
console.log(game2);
// trim -> removing extra spaces
const trimming="     hello     "
console.log(trimming);
console.log(trimming.trim());

//replace
const url="https://abcxyz.com/abc%20xyz"
console.log(url.replace('%20','-'))
console.log(url.includes('abcxyz'))
//split
console.log(url.split('.'))