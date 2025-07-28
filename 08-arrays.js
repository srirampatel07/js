  //   array    //



  const myArr = [0, 1, 2, 3, 4, 5, "chanti"]  //  in array we can define any data type like string, number, boolean etc...   //
  const myHeros = ["spider man", "super man"]
  const myArr2 = new Array(1, 2, 3, 4, 5)

  console.log(myArr[5]);
  console.log(myHeros["super man"]);
  console.log(myArr2[3]);



// //   array methods   //
  

myArr.push(6)   //  it will add the value in the ()  //  o/p is [ 0, 1, 2, 3, 4, 5, 'chanti', 6 ]  //
myArr.pop()   //  it will remove the extra added value  //  o/p is [ 0, 1, 2, 3, 4, 5, 'chanti' ]  //
myArr.unshift(8)  //  it will add the () value in the first place  //  o/p is  [ 8, 0, 1, 2, 3, 4, 5, 'chanti' ]   //
myArr.shift()   //   it will remove the above () value  //   o/p is [ 0, 1, 2, 3, 4, 5, 'chanti' ]   //
console.log(myArr);

console.log(myArr.includes(7));  //  it will say the () value is there in myArr or not  //  o/p is false   //
console.log(myArr.indexOf(9));   //  it will say if the value is not there it will show -1 value, if the value is exist it will show the value  //  here o/p is 1  //


const newArray = myArr.join()
console.log(newArray);       //   it will add the data again and the data type is string  //  here it will add myArr data  //  o/p is 0,1,2,3,4,5,chanti  //
console.log(typeof newArray);  //  data type is string  //


// slice, splice  


console.log("a ", myArr);  //  it will a in front of the given value  //  here o/p is   a  [ 0, 1, 2, 3, 4, 5, 'chanti' ]  //

const myn1 = myArr.slice(1,3)  //  it will gives the values b/w the entered values in (), in it last value in bracket will not included it shoes in b/w of 1st and last values  //  here o/p is [1,2]  and it wil not show 3   //
console.log(myn1);
console.log("b ", myArr);


const myn2 = myArr.splice(1,3)   //  it will gives the values entered in the (), in it last value in bracket will included  //  here o/p is     c  [ 0, 4, 5, 'chanti' ]
console.log("c ", myArr);
console.log(myn2);










 






  
  