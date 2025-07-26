  // conversion of data types //


let score = "33abc"

console.log(typeof score);  // type of data type //
console.log(typeof(score)); // type of data type //

let valueInNumber = Number(score) // conversion //
console.log(typeof valueInNumber); // shows data type as number //
console.log(valueInNumber);  // shows ony numbers //


 // "33" => 33 //
 // "33abc" => NaN //
 // true => 1; false => 0 //



 let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)  // conversion //
 console.log(booleanIsLoggedIn);

 // 1 => true; 0 => false //
 // "" => false //
 // "chanti" => true //


 let someNumber = 33
 let stringNumber = String(someNumber)  // conversion //
 console.log(stringNumber);
 console.log(typeof stringNumber);
 
 


    // operations //

    let value = 3
    let negValue = -value
    console.log(negValue);  


    // to add strings //

    let str1 = "hello"
    let str2 = " chanti"
    let str3 = str1+str2
    console.log(str3);


    
    
    
    console.log("1"+2);  // o/p is 12 // if the string is in 1st place it will treat total as string 
    console.log(1+"2");  // o/p is 12 //
    console.log("1"+2+2);  // o/p is 122 //
    console.log(1+2+"2");  // o/p/ is 32 // if string value is in last it will perform 1st operation the it give string value
    
    console.log((3+4)*5%3); // use () to execute the operation 1st and then it will execute all


    console.log(+true);

    // let num1 = num2 = num3
    // num1 = num2 = num3 = 5+4
    
    let gamecounter = 99
    gamecounter++
    console.log(gamecounter);
    
    
    
    
    
    