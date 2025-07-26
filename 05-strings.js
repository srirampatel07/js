const name = "chanti"
const repoCount = 50


console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);  // to add strings use `` and ${}



// methods to declare strings 


const gameName = new String ("cha-nti-sri-ram")  

console.log(gameName [0]);   // in 0 f is there
console.log(gameName.__proto__);   // to find proto type
console.log(gameName.length);   // length of the given string
console.log(gameName.toUpperCase());   // it will convert to capital letters
console.log(gameName.charAt(3));   // count the positions of string here in 3 e is there
console.log(gameName.indexOf("i"));  // to find i in which number it is there


const newString = gameName.substring(0,3)  // it will count from 0
console.log(newString);

const anotherString = gameName.slice(-10 ,6)  //  it will count from negative values also
console.log(anotherString);


const newStringOne = "    chanti  "
console.log(newStringOne);
console.log(newStringOne.trim());  //  it is used to trim sapces 

const url = "https://chanti%20sriram"
console.log(url.replace("%20","-"));  // it will used to replace the values
console.log(url.includes("chanti"));   //  it will says the mentioned value is there or not



console.log(gameName.split("-"));  //  o/p is [ 'cha', 'nti', 'sri', 'ram' ] it is an array it has 3 strings (it will split the values )















