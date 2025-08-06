  ///    truthy & falsy values    // 


  //  falsy values

//   false, 0, -0, BigInt 0n, "", null, undefined, NaN


  //   truth values   //  //  expect falsy values remaining all are truthy values  //  if any value is written in string then it is known as truthy value including space also   //

 //    "0", "false", " ", [], {}, function(){}
//    flase == 0  //  true
///   false == ""  //  true
////   0 == ""   //  true



 const userEmail = []

 if (userEmail.length === 0) {       //  to check array is empty or not
    console.log("array is empty");
    
 }



 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){   //  to check object is empty or not
    console.log("object is empty");
    
 }




 //  ++++++  nullish Coalescing Operator (??): null, undefined   //  it will give the first value if the first value is null (or) undefined then we get the second value   //


    let val1;

    // val1 = 5 ?? 10         //  here o/p is 5 
    // val1 = null ?? 10      //  here o/p is 10
    // val1 = undefined ?? 15  //  here o/p is 15
    val1 = null ?? 10 ?? 20     //  here o/p is 10


    console.log(val1);




    // ++++++++++     terniary Operator (?)  ++++++++++++++ //   it is used to check both statements at a time
    
    //  condition ? true : false



    const iceTeaPrice = 100
    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
    
    