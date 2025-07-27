  ///               NUMBERS      //




const score = 200     // it will show what we are written in score //  //  o/p is 200
console.log(score);

const balance = new Number (1000)  // this will show number type , it specially says that it is a number // //  o/p is [Number: 1000]
console.log(balance);

console.log(balance.toString());  //  it will convert into string  //  o/p is 1000  //

console.log(balance.toString().length);  //  it will gives the length of the string  // o/p is 1000  //

console.log(balance.toFixed(3));  // it will gives in decimal values //  o/p is 1000.000  //



const otherNumber = 144.8966
console.log(otherNumber.toPrecision(3));  // it will round off and apply from starting  of the decimals and continues //  o/p is 145  //


const hunderds = 1000000
console.log(hunderds.toLocaleString("en-IN"));  // ("en-IN") it will apply , in between numbers according to  indian number system  //  o/p is 10,00,000  //




  //    *************** MATHS  ***************   //

  // in Math use M as capital  // 

  console.log(Math.abs(-4));   //  it will give absolute values (it will convert -ve values into +ve values)  //  o/p is 4  //
  
  console.log(Math.round(40.7));  //  it will give round off values it will not give in decimal values  //  o/p is  41  //

  console.log(Math.ceil(4.3));  //  it will round off the first value before decimal,  here it will round off 4 number not 3 number  //  o/p is 5  //
  
  console.log(Math.floor(4.9));  // it will only give lowest values it will not consider after decimal values it directly gives first value  //  o/p is 4 //

  console.log(Math.min(4, 3, 7, 9, 0));  // it will give the lowest value among all other values  //  o/p is 0  //

  console.log(Math.max(9, 5, 6, 1, 3));  // it will give the highest value among all other values  //  o/p is 9  //

  console.log(Math.random());  //  it will always gives random values b/w 0 and 1 it will give only decimal values  //
  console.log(Math.random()*10);  //  it will gives random values but it will multiply with after * number and it will give o/p , it will shift after decimal number to the 1st place  //  o/p is 5.145740048091893  //
  console.log(Math.random()*100);  //  it will shift 2 values from after decimal to before decimal  //  o/p is 34.410469048513036  //
  console.log(Math.random()*10+1);  // it will not give 0's in front of decimal values  //  o/p is 10.918530907069687  //
  console.log((Math.random()*10) + 1);
  console.log(Math.floor(Math.random()*10) + 1);  // it will avoid o's in the o/p and gives values b/w 1 and 9, we added +1 cause it will give values 1 and above, it will not give decimal values vause we used floor //  o/p is 8  //

  const min = 10
  const max = 30
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //  it will gives random values b/w min and max values from the above values, max - min wil give the values b/w min and max  //  o/p is 11, 13, 27, etc...  //

  




  
  
  
  
  
  


  
  
  
  