 //  singleton  //

//  object literals  //  written as {}  we can write any data types in the {}


const mysym = Symbol("key1")   //  symbol



const jsUser = {

    name: "chanti",
    "full name": "chetti Sriram",
    [mysym]: "key1",    //   to mention the symbol cumpolsory use [] or else it will consider as string
    age: 19,
    location: "karimnagar",
    email: "chettisrirampatel@gmail.com",
    isLoggenIn: false,
    lastLoginDays: ["monday", "saturday"]
}


console.log(jsUser);   //  to access all o/p values
console.log(jsUser["email"]);   //  to access single value from the above
console.log(jsUser[mysym]);

jsUser.email = "chanti@gmail.com"   // to change any thing use this format  //  the email has been changed in o/p  //
// Object.freeze(jsUser)    //  after using .freeze we can't change the values further  //  
jsUser.name = "sriram"  //  here it is not changed cause we used .freeze in the above  // 

console.log(jsUser);    


jsUser.greeting = function(){
    console.log("hello js user");

}


console.log(jsUser.greeting);  //  wrong way to define function  //  //  o/p is  [Function (anonymous)]   //
console.log(jsUser.greeting());  //  this is wrong way  //  the o/p value is not defined


jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);   //  by using  ``  you can written as many values you want like name, age, email etc.....    //
    
}

console.log(jsUser.greetingTwo());




