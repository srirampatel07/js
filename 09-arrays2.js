const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)   //   .push is used to join both arrays but it will gives array inside the array //  here o/p is  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);


const allHeros = marvel_heros.concat(dc_heros)   //  .concat is also used to join both arrays into single array  in this we can join only 2 arrays  //  o/p is   [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]  //
console.log(allHeros);


const allNewHeros = [...marvel_heros, ...dc_heros]   //  by using ...  we can add as many arrays we can want the function is same like .concat but use this ...   in this we can add so many arrays  //   o/p is  [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]   //
console.log(allNewHeros);



const anotherArray = [4, 5, 7, [3, 9, 5, [8, 2, 1, [5, 9, 3]]]]
console.log(anotherArray.flat(Infinity));   //  .flat will convert all above arrays into single array or our wish  //  here o/p is  [
//                                                                                                                              4, 5, 7, 3, 9,
//                                                                                                                              5, 8, 2, 1, 5,
//                                                                                                                              9, 3
//                                                                                                                             ]






console.log(Array.isArray("chanti"));   //  .isArray  it will says the given is array or not, it will say only in boolean  //  here o/p is false  //
console.log(Array.from("chanti"));    //   .from  will convert the values(data type) into array values  //  here o/p is  [ 'c', 'h', 'a', 'n', 't', 'i' ]   //






let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //  Array.of will join all the values and give it in a single array  //  here o/p is  [ 100, 200, 300 ]



