const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( (item) => {
//     console.log(item);
// } )




const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter ( (num) => num > 4 )   //   filter function 



const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);


