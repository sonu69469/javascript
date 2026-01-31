const name = "Sonu"
const repoCount = 5

// console.log(name + repoCount + " Value"); // Sonu5 value => not recommended to use this way as it's outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Sonu and my repo count is 5
// console.log(`Hello, This is ${name} and i have around ${repoCount} repos on my channel`); // Hello, This is Sonu and i have around 5 repos on my channel


const gameName = new String('New-Super-contra.com')
// console.log(gameName); // [String: 'New-Super-contra.com'] => this is an Object. Don't get confuse by looking the positions As Arrays.
// console.log(typeof gameName);  // Object

// NOTE: Since it's an object, there are Key-Value pairs. we can access any key as shwn below:

// console.log(gameName[0]); // N
// console.log(gameName[4]); // S
// console.log(gameName.__proto__); // {} => Objects of string


// console.log(gameName.length); // 20
// console.log(gameName.toUpperCase()); // NEW-SUPER-CONTRA.COM
// console.log(gameName.charAt(5)); // u
// console.log(gameName.indexOf('t')); // 13

const newString = gameName.substring(0, 4)
// console.log(newString); // New- => Note- here the substring will count from 0th position to 3rd position. 4th position will be excluded. 

const anotherString = gameName.slice(-20, 6) // we can give negative value in Slice  but subString we can't . even if we give negativ, that will ignore the negative number and start from 0th position
// console.log(anotherString); // New-Su  => need more understandings

const newStringOne = "   Sonu    "
// console.log(newStringOne); // '  Sonu  '
// console.log(newStringOne.trim()); // Sonu => This Trim is used to remove extra spaces 

const url = "https://google.com/user%20name"

console.log(url.replace('%20', '-')) // https://google.com/user-name

console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // [ 'New', 'Super', 'contra.com' ]

