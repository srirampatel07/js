const user = {
    username: "chanti",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);   //  this is used for current context,  it will access only inside the block scope( inside the {} )
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sriram"
// user.welcomeMessage()


// console.log(this);



// function chai() {              //    this is wrong way to declare this in functions   //  o/p is undefined    //
//         let username = "chanti"
//     console.log(this.username);
    
// }
// chai()



const chai = () => {
     let username = "chanti"
     console.log(this.username);
}
chai()



// const addTwo = (num1, num2) => {     //  basic arrow function   //  here we used {} so, we need to use return  //
//     return num1 + num2
// }




const addTwo = (num1, num2) => num1 + num2     //  it is known as implisit return,  in this we will not use {},  if we use {} must write retuen , if we use () no need of using return  //  it will mostly use in react

console.log(addTwo(5, 7));

