const name='samikshha'
const repo=10
//console.log(name+repo+'value') bad practice 
console.log(`hello my name is ${name} and my repo count is ${10}`);
const gamename=new String('samiksha')
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('m'));

const newString=gamename.substring(0,4)
console.log(newString);
const string=gamename.slice(-8,4);
console.log(string);

const newStringone="    sam     "
console.log(newStringone);
console.log(newStringone.trim()); 

const url="https://hitesh.com/samiksha%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sew'))