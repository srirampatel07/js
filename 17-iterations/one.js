  //  +++++++++++  for loop  ++++++++++++++++  ??


  for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
  }



  for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop: ${i}`);
    
      for (let j = 1; j <= 10 ; j++) {
        // console.log(`inner loop: ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + " = " + i * j);
        
}    
  }





  let myArray = ["spider man", "super man", "bat man"]
    // console.log(myArray.length);
    
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
  }





  // +++++++  BREAK AND CONTINUE ++++++++++++++ //


//   for (let index = 1; index <= 20; index++) {    //   break will perform,  once the value is detected then it will not allow remaining values
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//         console.log(`value of i is ${index}`);
            
//   }
  
  for (let index = 1; index <= 20; index++) {   //  continue will perform,  once the value is detected after it will  allow remaining values also
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
        console.log(`value of i is ${index}`);
            
  }