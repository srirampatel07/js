const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const myNewNums = myNumbers.map( (num) => { return num + 10} )  //  if you use {} compulsory you should mention return before the condition  //
//  const myNewNums = myNumbers.map( (num) => num + 10 )  ///   if you not use {} you can directly write the conditions   //


///    CHAINING   ///    by using chaining method we can add as many conditions in a single operation(line)  //

const myNewNums = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 40 )    //  filter will allows only if the condition is satisfied
console.log(myNewNums);
