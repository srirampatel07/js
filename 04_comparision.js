  // comparisions //


//   basic comparisons

  console.log(2 > 1);
  console.log(2 >= 1);
  console.log(2 < 1);
  console.log(2 == 1);
  console.log(2 != 1);

//   data types conversions

   console.log("2" > 1);  // comparison of data types string with number //
   console.log("02" > 1);
   
   
  

  // the reason is that an equity check == and comparisons >, <, >=, <= work differently //
  //   comparisions convert null to a number, treating it as 0. that's why (3) null >= 0 is true and (1) null>0  is false //
  

//   console.log(null > 0);    avoid this type of conversions
//   console.log(null == 0);
//   console.log(null >= 0);
  
//   console.log(undefined == 0);  // compare any value with undefined it will give false only //
  

  