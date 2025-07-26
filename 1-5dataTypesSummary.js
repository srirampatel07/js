   // dataTypes  //


//  primitive data types.....

// 7 types

// String
// Number
// Boolean
// null
// undefined
// Symbol   // for unique purpose //
// BigInt

  const score = 100
  const scoreValue = 100.3
  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;

//  symbol //

   const id = Symbol("123")
   const anotherId = Symbol("123")
   console.log(id === anotherId);
   
//    BigInt  //

   const bigNumber = 4651223368996n
   console.log(bigNumber);
   




// reference (non primitive) data types....

// array , Objects , function

  // array // written in square brackets [""]

  const heros = ["chanti", "superman"];
  console.log(heros);
  



//   objects  // written in curly braces {}
    
   let obj= {
        name: "chanti",  // string type //
        age: 19          // number type //
    }
    console.log(obj);



    // function  // written as (){} //
    const myFunction = function(){
        console.log("hello world");
        
    }
    
    console.log(typeof bigNumber);    // undefined //
    console.log(typeof outsideTemp);  // object //
    console.log(typeof scoreValue);   // number //
    console.log(typeof myFunction);   // function //
    console.log(typeof heros);        //object //
    console.log(typeof anotherId);   // symbol //





    // +++++++++++++++++++++++++++  memories  +++++++++++++++++++++++++++++ //

    // 2 types of memories //
    //   stack  // used in primitive data types //
    //   heap   //  used in non primitive data types //


         // stack //

    let myYoutubename = "chantiii"
    let anothername = myYoutubename
    anothername = "srirammm"

    console.log(myYoutubename);
    console.log(anothername);



          // heap  //
    
    let userOne = {
      email: "chanti@gmail.com",
      upi: "chanti@ynl"
    }
    
    let userTwo = userOne
    userTwo.email = "sriram@gmail.com"

    console.log(userOne.email);
    console.log(userTwo.email);
    
    
    


    
    
    
    
    