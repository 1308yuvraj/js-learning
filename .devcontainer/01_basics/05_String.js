const name = "Yuvraj";
const repoCount = 10;

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is string interpolation

const gameName = new String("valorant");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "     yuvraj    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yuvraj.com/yuvraj%20singh";
console.log(url.replace('%20','-'));
console.log(url.includes('yuvraj'));

const splitVar = "yuvraj-singh-raghuvanshi";
console.log(splitVar.split('-'));
