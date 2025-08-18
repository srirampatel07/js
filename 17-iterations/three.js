//  ++++++++ FOR OF LOOP +++++++++++ //////////


const arr = [1, 2, 3, 4, 5]      //  for array

for (const i of arr) {
    console.log(i);
    
}


const greetings = "hello world!"   // for string

for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}




/////// +++++++++++ MAPS +++++++++++ ////////// map is an object  it is used for unique values


 const map = new Map

 map.set("IN", "India")
 map.set("USA", "United States Of America")
 map.set("FR", "France")

//  console.log(map);

for (const [keys, values] of map) {
    console.log(keys, ":-", values)
}


//  example taken from chatgpt for map

//  const cart = [
//   { item: "Book", price: 100 },
//   { item: "Pen", price: 20 },
//   { item: "Bag", price: 500 }
// ];

// // Add 18% GST to each item
// const withGST = cart.map(product => ({
//   ...product,
//   priceWithGST: product.price * 1.18
// }));

// console.log(withGST);

 

///  this loop will not work on objects  ///